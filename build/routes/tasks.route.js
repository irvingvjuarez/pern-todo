"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskEndpoint = exports.TasksRouter = void 0;
const express_1 = require("express");
const tasks_controller_1 = require("../controllers/tasks.controller");
const controller = new tasks_controller_1.TaskController();
const TaskEndpoint = "/tasks";
exports.TaskEndpoint = TaskEndpoint;
const TasksRouter = (0, express_1.Router)();
exports.TasksRouter = TasksRouter;
// GET
TasksRouter.get("/", controller.getAllTasks);
TasksRouter.get("/:id", controller.getOneTask);
// POST
TasksRouter.post("/", controller.createTask);
// PUT
TasksRouter.put("/:id", controller.updateTask);
// DELETE
TasksRouter.delete("/:id", controller.deleteTask);
