import { useState, useEffect } from "react"
import { Task } from "../../../types"
import { TASKS_API } from "../globals"

export const useTasks = () => {
	const [tasks, setTasks] = useState<Task[]>([])
	const [taskInput, setTaskInput] = useState("")
	const [loading, setLoading] = useState(true)

	const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setTaskInput(evt.target.value)
	}

	const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		fetch(TASKS_API, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify({
				content: taskInput
			})
		}).then(res => res.json())
			.then(data => {
				const newTask = data.rows[0]
				setTaskInput("")
				setTasks(prev => ({
					...prev,
					newTask
				}))
			})
	}

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
		loading,
		handleChange,
		handleSubmit
	}
}