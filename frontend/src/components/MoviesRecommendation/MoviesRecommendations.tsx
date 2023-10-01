import { movieRecommendationKeys } from "@/queries/movieRecommendation/movieRecommendation.keys";
import { useMovieRecommendationsQuery } from "@/queries/movieRecommendation/movieRecommendations.queries";
import { useIsMutating } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import parse from "html-react-parser";
import { ChatMessage } from "../ChatMessage/ChatMessage";

export const MoviesRecommendations = () => {
  const { data } = useMovieRecommendationsQuery();
  const isMutatingMovieRecommendation = useIsMutating({
    mutationKey: movieRecommendationKeys.create,
  });

  let content;

  if (isMutatingMovieRecommendation) {
    content = <p>Loading...</p>;
  } else if (data?.length === 0) {
    content = (
      <p className="text-[0.8rem] text-muted-foreground">
        No recommendations yet
      </p>
    );
  } else {
    content = data?.map((movie) => {
      const messageWithStyling = movie?.message
        .replace(/<h1>/gm, `<h1 classname="text-sm font-semibold">`)
        .replace(/<p>/gm, `<p className="text-sm my-2">`);

      return (
        <ChatMessage
          key={nanoid()}
          message={parse(messageWithStyling)}
          title={movie?.movie}
          owner="bot"
        />
      );
    });
  }

  return (
    <div className="flex gap-2 flex-col overflow-auto p-4 flex-1 bg-gray-50 rounded-xl border items-center">
      {content}
    </div>
  );
};
