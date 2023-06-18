import express from "express";
const app = express();

// Setting up View Engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { name: "Muhammad Usama" });
});

app.listen(5000, () => {
  console.log("Server is running!");
});
