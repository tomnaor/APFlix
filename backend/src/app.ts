import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import movieRecommendationRouter from "./routers/movieRecommendation/movieRecommendationRouter";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/movie-recommendation", movieRecommendationRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
