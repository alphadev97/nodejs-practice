import express from "express";
import path from "path";
import mongoose from "mongoose";

// Database Connection using mongoose
mongoose
  .connect("mongodb://localhost:27017", {
    dbName: "Backend",
  })
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const Message = mongoose.model("Message", messageSchema);

const app = express();

const users = [];

// Using middlewares
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

// Setting up View Engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { name: "Muhammad Usama" });
});

// MongoDB
app.get("/add", (req, res) => {
  Message.create({ name: "Usama", email: "Sample@gmail.com" }).then(() => {
    res.send("Running MongoDB");
  });
});

// Success Route
app.get("/success", (req, res) => {
  res.render("success");
});

app.post("/contact", (req, res) => {
  users.push({ username: req.body.name, email: req.body.email });
  // res.render("success");
  res.redirect("/success");
});

app.get("/users", (req, res) => {
  res.json({
    users,
  });
});

app.listen(5000, () => {
  console.log("Server is running!");
});
