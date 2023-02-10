import mongoose from "mongoose";
const schema = new mongoose.Schema({
  name: { type: String, required: true },
  adminUserName: { type: String },
  adminUserEmail: { type: String },
  adminUserPhoto: { type: String },
  tasks: [
    {
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
      },
      workingUserName: {
        type: String,
      },
    },
  ],
  teamUser: [
    {
      name: { type: String },
      email: { type: String },
    },
  ],
});

const TaskSchema = mongoose.model("Task", schema);
export { TaskSchema };
