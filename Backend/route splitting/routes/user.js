import express from "express";

const router = express.Router();

router.get("/users/all", async (req, res) => {
  const users = await User.find({});

  console.log(req.query);

  const keyword = req.query.keyword;

  console.log(keyword);

  res.json({
    success: true,
    users,
  });
});

app.post("/users/new", async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });

  res.status(201).cookie("tempi", "lol").json({
    success: true,
    message: "Register Successfully",
  });
});

app.get("/userid/special", (req, res) => {
  res.json({
    success: true,
    message: "Just Playing",
  });
});

app.get("/userid/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json({
    success: true,
    user,
  });
});

export default router;
