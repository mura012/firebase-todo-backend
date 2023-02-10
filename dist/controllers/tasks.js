"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = exports.updateTask = exports.deleteTask = exports.deleteAllTask = exports.createTask = exports.getRecordByName = exports.getRecordsByEmail = exports.getRecordsByAdminEmail = void 0;
const Task_1 = require("../models/Task");
const getRecordsByEmail = async (req, res) => {
    try {
        const allTask = await Task_1.TaskSchema.find({
            adminUserEmail: req.params.email,
        });
        res.status(200).json(allTask);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.getRecordsByEmail = getRecordsByEmail;
const getRecordsByAdminEmail = async (req, res) => {
    try {
        const allTask = await Task_1.TaskSchema.find({
            adminUserEmail: req.params.adminEmail,
        });
        res.status(200).json(allTask);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.getRecordsByAdminEmail = getRecordsByAdminEmail;
const getRecordByName = async (req, res) => {
    try {
        const allTask = await Task_1.TaskSchema.findOne({ name: req.params.name });
        res.status(200).json(allTask);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.getRecordByName = getRecordByName;
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
const addTask = async (req, res) => {
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
exports.addTask = addTask;
//# sourceMappingURL=tasks.js.map