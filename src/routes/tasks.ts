import express from "express";
import {
  getRecordsByAdminEmail,
  createTask,
  deleteAllTask,
  deleteTask,
  getRecordByName,
  getRecordsByEmail,
  updateTask,
} from "../controllers/tasks";
const router = express.Router();

router.get("/adminTasks/:adminEmail", getRecordsByAdminEmail);
router.get("/myTasks/:email", getRecordsByEmail);
router.get("/myTask/:name", getRecordByName);
router.post("/", createTask);
router.patch("/update/:id", updateTask);
router.delete("/all", deleteAllTask);
router.delete("/:id", deleteTask);

export { router };
