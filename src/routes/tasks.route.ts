import {Router} from "express"
import { TaskController } from "../controllers/tasks.controller"

const controller = new TaskController()
const TaskEndpoint = "/tasks"
const TasksRouter = Router()

// GET
TasksRouter.get("/", controller.getAllTasks)
TasksRouter.get("/:id", controller.getOneTask)

// POST
TasksRouter.post("/", controller.createTask)

// PUT
TasksRouter.put("/:id", controller.updateTask)

// DELETE
TasksRouter.delete("/:id", controller.deleteTask)

export {
	TasksRouter,
	TaskEndpoint
}