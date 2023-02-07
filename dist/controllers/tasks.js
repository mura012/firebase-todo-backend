"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.deleteTask = exports.deleteAllTask = exports.createTask = exports.getAllTasks = void 0;
const Task_1 = require("../models/Task");
const getAllTasks = async (req, res) => {
    try {
        const allTask = await Task_1.TaskSchema.find();
        res.status(200).json(allTask);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.getAllTasks = getAllTasks;
const createTask = async (req, res) => {
    try {
        const createTask = await Task_1.TaskSchema.create(req.body);
        res.status(200).json(createTask);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.createTask = createTask;
const deleteAllTask = async (req, res) => {
    try {
        const deleteAllTask = await Task_1.TaskSchema.deleteMany({
            userId: req.body.userId,
        });
        res.status(200).json(deleteAllTask);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.deleteAllTask = deleteAllTask;
const deleteTask = async (req, res) => {
    try {
        const deleteTask = await Task_1.TaskSchema.deleteOne({ _id: req.params.id });
        res.status(200).json(deleteTask);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.deleteTask = deleteTask;
const updateTask = async (req, res) => {
    try {
        const updateTask = await Task_1.TaskSchema.updateOne({
            _id: req.params.id,
        }, req.body);
        res.status(200).json(updateTask);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.updateTask = updateTask;
//# sourceMappingURL=tasks.js.map