"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connect_1 = require("./db/connect");
const dotenv_1 = __importDefault(require("dotenv"));
const tasks_1 = require("./routes/tasks");
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
app.use((0, cors_1.default)({
    origin: process.env.PORT || "https://firebase-todo-frontend.vercel.app/",
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", async (req, res) => {
    return res.status(200).send({
        message: "Hello",
    });
});
app.use("/api/tasks", tasks_1.router);
const start = async () => {
    if (process.env.DATABASE_URL) {
        await (0, connect_1.connectDB)(process.env.DATABASE_URL);
    }
};
start();
try {
    app.listen(PORT, () => {
        console.log(`dev server running at: http://localhost:${PORT}/`);
    });
}
catch (e) {
    if (e instanceof Error) {
        console.error(e.message);
    }
}
//# sourceMappingURL=index.js.map