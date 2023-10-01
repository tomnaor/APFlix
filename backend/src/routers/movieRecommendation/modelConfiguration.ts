import OpenAI from "openai";

const gptSystemMessage: OpenAI.Chat.ChatCompletionCreateParams["messages"][number] =
  {
    role: "system",
    content: `
  Your task is to give the best movie recommendation based on the user's personal preferences and characteristics.
  You can choose a movie only from this movie list - 
  1. The Silence of the Lambs
  2. Pulp Fiction
  3. The Shawshank Redemption
  4. Inception
  5. Jurassic Park
  6. The Lord of the Rings: The Fellowship of the Ring
  7. Fight Club
  8. Titanic
  9. The Matrix
  10. Forrest Gump 
  `,
  };

const movieRecommendationParams = {
  type: "object",
  properties: {
    movie: {
      type: "string",
      description: "The movie name e.g. Forrest Gump",
    },
    message: {
      type: "string",
      description: `The explanation of the recommendation e.g. 
        Based on your personal preferences and characteristics, I recommend watching "Forrest Gump" (1994) from your provided list. Here's why: Demographic Match: You mentioned you're a 45-year-old man, and "Forrest Gump" is a classic film that has broad appeal across different age groups.
        Heartwarming Story: "Forrest Gump" is a heartwarming and touching film that tells the life story of a man with a unique perspective on life. It combines elements of drama, comedy, and romance, making it a great choice for a movie night with your girlfriend.
        Louisiana Connection: While the film is not set in Louisiana, it does include scenes that take place in the state, particularly New Orleans. This connection to your home state might add an extra layer of enjoyment.
        Acclaimed and Popular: "Forrest Gump" is highly acclaimed and beloved by audiences worldwide. It won several Oscars and remains a favorite for many.
        The film's mix of humor, romance, and its memorable portrayal of historical events make it a fantastic choice for a cozy movie night with your girlfriend. Enjoy your evening!`,
    },
  },
  required: ["movie", "message"],
};

export const chatCompletionParams: OpenAI.Chat.ChatCompletionCreateParams = {
  messages: [gptSystemMessage],
  model: "gpt-3.5-turbo-16k-0613",
  temperature: 0.2,
  functions: [
    { name: "movie_recommendation", parameters: movieRecommendationParams },
  ],
  function_call: { name: "movie_recommendation" },
  stream: false,
};
