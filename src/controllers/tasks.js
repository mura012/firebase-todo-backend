"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.deleteTask = exports.createTask = exports.getAllTasks = void 0;
const Task_1 = require("../models/Task");
const getAllTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTask = yield Task_1.TaskSchema.find();
        res.status(200).json(allTask);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.getAllTasks = getAllTasks;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createTask = yield Task_1.TaskSchema.create(req.body);
        res.status(200).json(createTask);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.createTask = createTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteTask = yield Task_1.TaskSchema.deleteOne({ _id: req.params.id });
        res.status(200).json(deleteTask);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.deleteTask = deleteTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateTask = yield Task_1.TaskSchema.updateOne({
            _id: req.params.id,
        }, req.body);
        res.status(200).json(updateTask);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.updateTask = updateTask;
