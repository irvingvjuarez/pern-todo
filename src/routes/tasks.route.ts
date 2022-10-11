import {Router} from "express"

const TaskEndpoint = "/tasks"
const TasksRouter = Router()

TasksRouter.get("/", (_req, res) => {
	res.send("Root of the endpoint")
})

export {
	TasksRouter,
	TaskEndpoint
}