import express, { Request, Response } from "express";
import OpenAI from "openai";
import { chatCompletionParams } from "./modelConfiguration";
import { MovieRecommendationRequest } from "./movieRecommendation.types";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post(
  "/",
  async (req: Request<{}, {}, MovieRecommendationRequest>, res: Response) => {
    const data = req.body;

    const userPrompt = `return a movie recommendation for """${data.prompt}"""`;

    const chatCompletion = (await openai.chat.completions.create({
      ...chatCompletionParams,
      messages: [
        ...chatCompletionParams.messages,
        {
          role: "user",
          content: userPrompt,
        },
      ],
    })) as OpenAI.Chat.ChatCompletion;

    res.send(chatCompletion.choices);
  }
);

export default router;
