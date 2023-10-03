const movieList = [
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
interface MovieRecommendation {
  movie: (typeof movieList)[number];
  message: string;
  isUserDescription: boolean;
  isSuspicious: boolean;
}

export interface MovieRecommendationResponseData {
  recommendation: MovieRecommendation;
  id: string;
  user_description: string;
}

export interface MovieRecommendationRequestData {
  userDescription: string;
}
