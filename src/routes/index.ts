import {Router} from "express"
import { TaskEndpoint, TasksRouter } from "./tasks.route"

const AppRouter = Router()

AppRouter.use(TaskEndpoint, TasksRouter)

export {AppRouter}