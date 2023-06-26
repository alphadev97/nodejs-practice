import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";

const app = express();

// Using Middleware
app.use(express.json());

app.use("/users", userRouter);

mongoose
  .connect("mongodb://localhost:27017", {
    dbName: "backendapi",
  })
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.send("Nice Work");
});

app.listen(4000, () => {
  console.log("Server is working on port 4000");
});
