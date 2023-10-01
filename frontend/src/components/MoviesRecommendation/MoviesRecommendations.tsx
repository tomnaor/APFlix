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
        .replace(/<h1>/gm, `<h1 classname="text-sm font-semibold">`)
        .replace(/<p>/gm, `<p className="text-sm my-2">`)
        .replace(
          /<div>/gm,
          `<div className="flex flex-col rounded-md bg-white p-4 max-w-lg shadow">`
        );

      return (
        <div key={nanoid()} className="flex flex-col gap-2">
          <h2 className="font-semibold leading-none tracking-tight">
            {movie?.movie}
          </h2>
          <p className="whitespace-pre-line">{parse(messageWithStyling)}</p>
        </div>
      );
    });
  }

  return (
    <div className="flex gap-2 flex-col overflow-auto p-4 flex-1 bg-gray-50 rounded-xl border">
      {content}
    </div>
  );
};
