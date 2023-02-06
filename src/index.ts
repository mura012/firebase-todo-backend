import express, { Application, Request, Response } from "express";
import { connectDB } from "./db/connect";
import dotenv from "dotenv";
import { router as taskRoute } from "./routes/tasks";
import cors from "cors";
const app: Application = express();
const PORT = 8000;
dotenv.config();

app.use(
  cors({
    origin: process.env.PORT || "https://firebase-todo-frontend.vercel.app/",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response) => {
  return res.status(200).send({
    message: "Hello",
  });
});

app.use("/api/tasks", taskRoute);

const start = async () => {
  if (process.env.DATABASE_URL) {
    await connectDB(process.env.DATABASE_URL);
  }
};
start();
try {
  app.listen(PORT, () => {
    console.log(`dev server running at: http://localhost:${PORT}/`);
  });
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}