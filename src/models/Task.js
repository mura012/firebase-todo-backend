"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    userId: { type: String },
    task: {
        type: String,
        trimu: true,
        maxlength: [20, "タスク名は20文字以内で入力してください"],
    },
    limit: {
        type: String,
        enum: ["今日中", "今週中", "今月中", "継続"],
    },
    importance: {
        type: String,
        enum: ["高", "中", "低"],
    },
    isDone: {
        type: Boolean,
        default: false,
    },
});
const TaskSchema = mongoose_1.default.model("Task", schema);
exports.TaskSchema = TaskSchema;
