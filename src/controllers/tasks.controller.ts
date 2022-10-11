import { Request, Response } from "express"
import { faker } from "@faker-js/faker"

export class TaskController {
	getAllTasks(_req: Request, res: Response) {
		const tasks = new Array(20).fill(0).map((_task) => ({
			id: faker.datatype.uuid(),
			content: faker.company.catchPhrase(),
			created_at: faker.date.past()
		}))

		res.json(tasks)
	}

	getOneTask(_req: Request, res: Response) {
		res.send("Returning only one task")
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