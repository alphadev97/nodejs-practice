import express from "express";
import userRouter from "./routes/user.js";
import { connectDB } from "./data/database.js";

export const app = express();

connectDB();

// Using Middleware
app.use(express.json());

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Nice Work");
});
