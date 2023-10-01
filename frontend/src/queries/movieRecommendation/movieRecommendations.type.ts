export interface MovieRecommendationResponseData {
  recommendation: string;
  id: string;
  user_description: string;
}

export interface MovieRecommendationRequestData {
  userDescription: string;
}
