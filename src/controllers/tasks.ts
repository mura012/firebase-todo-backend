import { Request, Response } from "express";
import { TaskSchema } from "../models/Task";
const getAllTasks = async (req: Request, res: Response) => {
  try {
    const allTask = await TaskSchema.find();
    res.status(200).json(allTask);
  } catch (err) {
    res.status(500).json(err);
  }
};
const createTask = async (req: Request, res: Response) => {
  try {
    const createTask = await TaskSchema.create(req.body);
    res.status(200).json(createTask);
  } catch (err) {
    res.status(500).json(err);
  }
};
const deleteTask = async (req: Request, res: Response) => {
  try {
    const deleteTask = await TaskSchema.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteTask);
  } catch (err) {
    res.status(500).json(err);
  }
};
const updateTask = async (req: Request, res: Response) => {
  try {
    const updateTask = await TaskSchema.updateOne(
      {
        _id: req.params.id,
      },
      req.body
    );
    res.status(200).json(updateTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

export { getAllTasks, createTask, deleteTask, updateTask };
