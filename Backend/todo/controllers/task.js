import { Task } from "../models/task.js";

export const newTask = async (req, res, next) => {
  const { title, description } = req.body;

  console.log("Working 1");

  await Task.create({
    title,
    description,
    user: req.user,
  });

  console.log("Working 2");

  res.status(201).json({
    success: true,
    message: "Task Added Successfully",
  });
};
