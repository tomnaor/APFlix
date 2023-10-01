import { movieRecommendationKeys } from "@/queries/movieRecommendation/movieRecommendation.keys";
import { useMovieRecommendationsQuery } from "@/queries/movieRecommendation/movieRecommendations.queries";
import { useIsMutating } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import parse from "html-react-parser";

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
        .replace(
          /<h1>/gm,
          `<h1 classname="text-sm font-semibold leading-none tracking-tight">`
        )
        .replace(/<p>/gm, `<p className="text-sm my-2">`)
        .replace(
          /<div>/gm,
          `<div className="flex flex-col rounded-md bg-gray-50 p-4 max-w-lg">`
        );

      return (
        <div key={nanoid()}>
          <p>{movie?.movie}</p>
          <p className="whitespace-pre-line">{parse(messageWithStyling)}</p>
        </div>
      );
    });
  }

  return (
    <div className="flex gap-2 flex-col items-center mt-5">
      <h1 className="font-semibold leading-none tracking-tight">
        Your movies recommendations
      </h1>

      {content}
    </div>
  );
};
