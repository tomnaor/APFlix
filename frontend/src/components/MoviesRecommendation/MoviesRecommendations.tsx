import { movieRecommendationKeys } from "@/queries/movieRecommendation/movieRecommendation.keys";
import { useMovieRecommendationsQuery } from "@/queries/movieRecommendation/movieRecommendations.queries";
import { useIsMutating } from "@tanstack/react-query";
import parse from "html-react-parser";
import { ChatMessage } from "../ChatMessage/ChatMessage";
import { moviesMapper } from "./moviesMapper";
import { useEffect, useRef } from "react";

export const MoviesRecommendations = () => {
  const { data } = useMovieRecommendationsQuery();
  const isMutatingMovieRecommendation = useIsMutating({
    mutationKey: movieRecommendationKeys.create,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [isMutatingMovieRecommendation]);

  let content;

  if (data?.length === 0) {
    content = (
      <p className="text-[0.8rem] text-muted-foreground">
        No recommendations yet
      </p>
    );
  } else {
    content = data?.map((recommendationData) => {
      const messageWithStyling = JSON.parse(recommendationData?.recommendation)
        ?.message.replace(/<h1>/gm, `<h1 classname="text-sm font-semibold">`)
        .replace(/<p>/gm, `<p className="text-sm my-2">`);

      return (
        <div
          key={recommendationData.id}
          className="flex gap-4 flex-col pb-4 items-start border-b"
        >
          <ChatMessage
            message={recommendationData.user_description}
            owner="user"
          />
          <ChatMessage
            message={parse(messageWithStyling)}
            title={JSON.parse(recommendationData?.recommendation)?.movie}
            owner="bot"
            img={
              <img
                src={
                  moviesMapper[
                    JSON.parse(recommendationData?.recommendation)?.movie
                  ]
                }
                className="h-80 rounded-md"
              />
            }
          />
        </div>
      );
    });
  }

  return (
    <div
      ref={containerRef}
      className="flex gap-4 flex-col overflow-auto p-4 flex-1 bg-gray-50 rounded-xl border items-center"
    >
      {content}
      {isMutatingMovieRecommendation ? <p>Loading...</p> : null}
    </div>
  );
};
