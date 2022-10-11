"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskEndpoint = exports.TasksRouter = void 0;
const express_1 = require("express");
const TaskEndpoint = "/tasks";
exports.TaskEndpoint = TaskEndpoint;
const TasksRouter = (0, express_1.Router)();
exports.TasksRouter = TasksRouter;
TasksRouter.get("/", (_req, res) => {
    res.send("Root of the endpoint");
});
