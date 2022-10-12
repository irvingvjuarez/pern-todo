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
		const { body: {content} } = req

		if (!content) {
			res.send("Body parameter not provided")
		} else {
			const newTask = {
				id: faker.datatype.uuid(),
				content,
				created_at: new Date().toString()
			}

			tasks.push(newTask)
			res.json(newTask)
		}
	}

	updateTask(req: Request, res: Response) {
		const { body, params } = req
		const { id } = params
		const index = tasks.findIndex(task => task.id === id)

		if(index >= 0) {
			const taskToUpdate = tasks[index]
			const newTask = {
				...taskToUpdate,
				...body
			}

			tasks[index] = newTask
			res.json(newTask)
		} else {
			res.status(404).send("Item not found")
		}
	}

	deleteTask(req: Request, res: Response) {
		const { id } = req.params
		const index = tasks.findIndex(task => task.id === id)

		if (index >= 0) {
			const deletedTask = tasks.splice(index, 1)
			res.json(deletedTask)
		} else {
			res.status(404).send("Item not found")
		}
	}
}