import { Request, Response } from "express"

export class TaskController {
	getAllTasks(_req: Request, res: Response) {
		res.send("Returning all the tasks")
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