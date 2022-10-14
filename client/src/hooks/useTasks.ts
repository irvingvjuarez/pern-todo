import { useState, useEffect } from "react"
import { Task } from "../../../types"

export const useTasks = () => {
	const [tasks, setTasks] = useState<Task[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const controller = new AbortController()
		const { signal } = controller

		fetch("http://localhost:3000/api/v1/tasks", {signal})
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