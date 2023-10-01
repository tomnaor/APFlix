import { useQuery } from "@tanstack/react-query";
import { movieRecommendationKeys } from "./movieRecommendation.keys";
import { MovieRecommendationResponseData } from "./movieRecommendations.type";

export const useMovieRecommendationsQuery = () => {
  return useQuery({
    queryKey: movieRecommendationKeys.get,
    initialData: [] as MovieRecommendationResponseData[],
  });
};
