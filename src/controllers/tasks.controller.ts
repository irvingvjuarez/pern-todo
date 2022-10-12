import { Request, Response } from "express"
import { faker } from "@faker-js/faker"
import tasks from "../data/tasks.json"

export class TaskController {
	getAllTasks(_req: Request, res: Response) {
		res.json(tasks)
	}

	getOneTask(req: Request, res: Response) {
		const { id } = req.params
		const task = tasks.find(task => task.id === id)

		if (task) {
			res.json(task)
		} else {
			res.status(404).send("Item not found")
		}
	}

	createTask(req: Request, res: Response) {
		const { body } = req

		if (!body.content) {
			res.send("Body parameter not provided")
		} else {
			// TODO: Add the new task to the database
			res.json({
				...body,
				id: faker.datatype.uuid(),
				createdAt: faker.date.past()
			})
		}
	}

	updateTask(req: Request, res: Response) {
		const { body } = req

		if (!body.content) {
			res.send("Body parameter not provided")
		} else {
			// TODO: Add the new task to the database
			res.json({
				...body
			})
		}
	}

	deleteTask(_req: Request, res: Response) {
		res.send("Task has been deleted")
	}
}