import express, { Request, Response } from "express";
import OpenAI from "openai";
import { chatCompletionParams } from "./modelConfiguration";
import {
  MovieRecommendationRequest,
  MovieRecommendationResponseData,
  movieList,
} from "./movieRecommendation.types";
import dotenv from "dotenv";
import { randomUUID } from "crypto";

dotenv.config();
const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post(
  "/",
  async (req: Request<{}, {}, MovieRecommendationRequest>, res: Response) => {
    const data = req.body;

    if (!data?.userDescription) {
      res.status(400).send("Missing user description");
      return;
    }

    const userPrompt = `return a movie recommendation for """${data?.userDescription}"""`;

    try {
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

      const parsedRecommendation = JSON.parse(
        chatCompletion.choices[0].message?.function_call?.arguments || ""
      ) as MovieRecommendationResponseData;

      if (
        parsedRecommendation?.isSuspicious ||
        !parsedRecommendation?.isUserDescription
      ) {
        res.send({
          recommendation: {
            isUserDescription: parsedRecommendation?.isUserDescription,
            isSuspicious: parsedRecommendation?.isSuspicious,
          },
          user_description: data?.userDescription,
          id: randomUUID(),
        });
        return;
      }

      if (!movieList.includes(parsedRecommendation.movie)) {
        res.send({
          recommendation: {
            isSuspicious: true,
          },
          user_description: data?.userDescription,
          id: randomUUID(),
        });
        return;
      }

      res.send({
        recommendation: parsedRecommendation,
        user_description: data?.userDescription,
        id: randomUUID(),
      });
    } catch (err) {
      if (err instanceof OpenAI.APIError) {
        console.log(err);
        res.status(err.status || 400).send(err.message);
      } else {
        res.status(400).send(err);
      }
    }
  }
);

export default router;
