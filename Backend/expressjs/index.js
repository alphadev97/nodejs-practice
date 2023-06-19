import express from "express";
import path from "path";
const app = express();

app.use(express.static(path.join(path.resolve(), "public")));

// Setting up View Engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { name: "Muhammad Usama" });
});

app.listen(5000, () => {
  console.log("Server is running!");
});
