import { ApiAxiosInstance } from "@/api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { movieRecommendationKeys } from "./movieRecommendation.keys";
import {
  MovieRecommendationRequestData,
  MovieRecommendationResponseData,
} from "./movieRecommendations.type";

export const useMovieRecommendationMutation = () => {
  const queryClient = useQueryClient();

  const createMovieRecommendation = async (
    requestData: MovieRecommendationRequestData
  ) => {
    const data = await ApiAxiosInstance.post<MovieRecommendationResponseData>(
      "/movie-recommendation",
      requestData
    );

    return data;
  };

  return useMutation({
    mutationKey: movieRecommendationKeys.create,
    mutationFn: createMovieRecommendation,
    onSuccess: ({ data: newData }) => {
      queryClient.setQueryData<MovieRecommendationResponseData[]>(
        movieRecommendationKeys.get,
        (oldData) => {
          if (oldData) {
            return [...oldData, newData];
          }
        }
      );
    },
  });
};
