"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const faker_1 = require("@faker-js/faker");
class TaskController {
    getAllTasks(req, res) {
        const { limit } = req.query;
        const arrSize = Number(limit) || 20;
        const tasks = new Array(arrSize).fill(0).map((_task) => ({
            id: faker_1.faker.datatype.uuid(),
            content: faker_1.faker.company.catchPhrase(),
            created_at: faker_1.faker.date.past()
        }));
        res.json(tasks);
    }
    getOneTask(req, res) {
        const { id } = req.params;
        res.json({
            id,
            content: faker_1.faker.company.catchPhrase(),
            createdAt: faker_1.faker.date.past()
        });
    }
    createTask(req, res) {
        const { body } = req;
        if (!body.content) {
            res.send("Body parameter not provided");
        }
        else {
            // TODO: Add the new task to the database
            res.json(Object.assign(Object.assign({}, body), { id: faker_1.faker.datatype.uuid(), createdAt: faker_1.faker.date.past() }));
        }
    }
    updateTask(_req, res) {
        res.send("Updating an existing task");
    }
    deleteTask(_req, res) {
        res.send("Deleting a task");
    }
}
exports.TaskController = TaskController;
