import { Request, Response } from "express"
import { faker } from "@faker-js/faker"

export class TaskController {
	getAllTasks(req: Request, res: Response) {
		const { limit } = req.query
		const arrSize = Number(limit) || 20

		const tasks = new Array(arrSize).fill(0).map((_task) => ({
			id: faker.datatype.uuid(),
			content: faker.company.catchPhrase(),
			created_at: faker.date.past()
		}))

		res.json(tasks)
	}

	getOneTask(req: Request, res: Response) {
		const { id } = req.params

		res.json({
			id,
			content: faker.company.catchPhrase(),
			createdAt: faker.date.past()
		})
	}

	createTask(_req: Request, res: Response) {
		res.send("Creating a new task")
	}

	updateTask(_req: Request, res: Response) {
		res.send("Updating an existing task")
	}

	deleteTask(_req: Request, res: Response) {
		res.send("Deleting a task")
	}
}