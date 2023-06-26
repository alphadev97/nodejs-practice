import express from "express";
import mongoose from "mongoose";

const app = express();

// Using Middleware
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017", {
    dbName: "backendapi",
  })
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", schema);

app.get("/", (req, res) => {
  res.send("Nice Work");
});

app.listen(4000, () => {
  console.log("Server is working on port 4000");
});
