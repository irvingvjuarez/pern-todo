import { useState, useEffect } from "react"
import { Task } from "../../../types"
import { TASKS_API } from "../globals"

export const useTasks = () => {
	const [tasks, setTasks] = useState<Task[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const controller = new AbortController()
		const { signal } = controller

		fetch(TASKS_API, {signal})
			.then(res => res.json())
			.then(data => {
				setLoading(false)
				setTasks(data)
			})

		return () => controller.abort()
	}, [])

	return {
		tasks,
		loading
	}
}