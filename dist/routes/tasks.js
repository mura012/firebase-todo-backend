"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const tasks_1 = require("../controllers/tasks");
const router = express_1.default.Router();
exports.router = router;
router.get("/adminTasks/:adminEmail", tasks_1.getRecordsByAdminEmail);
router.get("/myTasks/:email", tasks_1.getRecordsByEmail);
router.get("/myTask/:name", tasks_1.getRecordByName);
router.post("/", tasks_1.createTask);
router.patch("/update/:id", tasks_1.updateTask);
router.patch("/add/:id", tasks_1.addTask);
router.delete("/all", tasks_1.deleteAllTask);
router.delete("/:id", tasks_1.deleteTask);
//# sourceMappingURL=tasks.js.map