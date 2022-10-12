"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const faker_1 = require("@faker-js/faker");
class TaskController {
    getAllTasks(_req, res) {
        const tasks = new Array(20).fill(0).map((_task) => ({
            id: faker_1.faker.datatype.uuid(),
            content: faker_1.faker.company.catchPhrase(),
            created_at: faker_1.faker.date.past()
        }));
        res.json(tasks);
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
