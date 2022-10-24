import { Request, Response } from "express"
import tasks from "../data/tasks.json"
import { db } from "../db"

export class TaskController {
	async getAllTasks(_req: Request, res: Response) {
		try {
			const data = await db.query("SELECT * FROM tasks")
			const tasks = data.rows
			res.json(tasks)
		} catch (err) {
			const { message } = err as Error
			res.status(500).send(message)
		}
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

	async createTask(req: Request, res: Response) {
		const { body: {content} } = req

		if (!content) {
			res.status(500).send("Body parameter not provided")
		} else {
			try {
				const data = await db.query(`INSERT INTO tasks(content) VALUES('${content}') RETURNING *`)
				res.json(data)
			} catch(err) {
				const { message } = err as Error
				res.status(505).send(message)
			}
		}
	}

	async updateTask(req: Request, res: Response) {
		const { params: {id}, body: {content} } = req
		try {
			const data = await db.query(`UPDATE tasks SET content ='${content}' WHERE id = ${id} RETURNING *`)
			res.json(data)
		} catch(err) {
			const { message } = err as Error
			res.status(500).send(message)
		}
	}

	async deleteTask(req: Request, res: Response) {
		const { id } = req.params
		try {
			const data = await db.query(`DELETE FROM tasks WHERE id = ${id} RETURNING *`)
			res.json(data)
		} catch(err) {
			const { message } = err as Error
			res.status(500).send(message)
		}
	}
}