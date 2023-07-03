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

export const getMyTask = async (req, res, next) => {
  const userid = req.user._id;

  const tasks = await Task.find({ user: userid });

  res.status(200).json({
    success: true,
    tasks,
  });
};

export const updateTask = async (req, res, next) => {
  const task = await Task.findById(req.params.id);

  if (!task)
    return res.status(404).json({
      success: false,
      message: "Invalid ID",
    });

  task.isCompleted = !task.isCompleted;
  await task.save();

  res.status(200).json({
    success: true,
    message: "Task Updated!",
  });
};

export const deleteTask = async (req, res, next) => {
  const task = await Task.findById(req.params.id);

  if (!task)
    return res.status(404).json({
      success: false,
      message: "Invalid ID",
    });

  await task.deleteOne();

  res.status(200).json({
    success: true,
    message: "Task Deleted!",
  });
};
