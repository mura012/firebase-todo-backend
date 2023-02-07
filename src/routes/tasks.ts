import express from "express";
import {
  createTask,
  deleteAllTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../controllers/tasks";
const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/all", deleteAllTask);
router.delete("/:id", deleteTask);

export { router };
