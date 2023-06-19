import express from "express";
import path from "path";
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
