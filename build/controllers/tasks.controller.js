"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
class TaskController {
    getAllTasks(_req, res) {
        res.send("Returning all the tasks");
    }
    getOneTask(_req, res) {
        res.send("Returning only one task");
    }
    createTask(_req, res) {
        res.send("Creating a new task");
    }
    updateTask(_req, res) {
        res.send("Updating an existing task");
    }
    deleteTask(_req, res) {
        res.send("Deleting a task");
    }
}
exports.TaskController = TaskController;
