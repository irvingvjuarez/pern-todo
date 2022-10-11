"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
const express_1 = require("express");
const tasks_route_1 = require("./tasks.route");
const AppRouter = (0, express_1.Router)();
exports.AppRouter = AppRouter;
AppRouter.use(tasks_route_1.TaskEndpoint, tasks_route_1.TasksRouter);
