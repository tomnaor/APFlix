export interface MovieRecommendationRequest {
  userDescription: string;
}

export const movieList = [
  "The Silence of the Lambs",
  "Pulp Fiction",
  "The Shawshank Redemption",
  "Inception",
  "Jurassic Park",
  "The Lord of the Rings: The Fellowship of the Ring",
  "Fight Club",
  "Titanic",
  "The Matrix",
  "Forrest Gump",
] as const;
export interface MovieRecommendationResponseData {
  movie: (typeof movieList)[number];
  message: string;
  isUserDescription: boolean;
  isSuspicious: boolean;
}
