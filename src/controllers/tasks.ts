import { Request, Response } from "express";
import { TaskSchema } from "../models/Task";

const getRecordsByEmail = async (req: Request, res: Response) => {
  try {
    const allTask = await TaskSchema.find({
      adminUserEmail: req.params.email,
    });
    res.status(200).json(allTask);
  } catch (err) {
    res.status(500).json(err);
  }
};
const getRecordsByAdminEmail = async (req: Request, res: Response) => {
  try {
    const allTask = await TaskSchema.find({
      adminUserEmail: req.params.adminEmail,
    });
    res.status(200).json(allTask);
  } catch (err) {
    res.status(500).json(err);
  }
};
const getRecordByName = async (req: Request, res: Response) => {
  try {
    const allTask = await TaskSchema.findOne({ name: req.params.name });
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
const deleteAllTask = async (req: Request, res: Response) => {
  try {
    const deleteAllTask = await TaskSchema.deleteMany({
      _id: req.body._id,
    });
    res.status(200).json(deleteAllTask);
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

export {
  getRecordsByAdminEmail,
  getRecordsByEmail,
  getRecordByName,
  createTask,
  deleteAllTask,
  deleteTask,
  updateTask,
};
