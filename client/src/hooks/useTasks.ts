import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { Task } from "../../../types"
import { TASKS_API } from "../globals"
import { EActionTypes } from "../stores/actions.types"
import { TasksActions } from "../stores"

export const useTasks = () => {
	const [tasks, setTasks] = useState<Task[]>([])
	const [taskInput, setTaskInput] = useState("")
	const [loading, setLoading] = useState(true)
	const dispatch = useDispatch()

	const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setTaskInput(evt.target.value)
	}

	const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()
		const fetchConfig = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify({
				content: taskInput
			})
		}

		fetch(TASKS_API, fetchConfig)
			.then(res => res.json())
			.then(data => {
				const newTask = data.rows[0]
				setTaskInput("")
				dispatch(TasksActions[EActionTypes.add](newTask))
			})
	}

	const deleteTask = async (id: number) => {
		const request = await fetch(`${TASKS_API}/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
		})
		const data = await request.json()
		const deletedTaskId = data.rows[0].id
		dispatch(TasksActions[EActionTypes.substract](deletedTaskId))
	}

	useEffect(() => {
		const controller = new AbortController()
		const { signal } = controller

		fetch(TASKS_API, {signal})
			.then(res => res.json())
			.then(data => {
				dispatch(TasksActions[EActionTypes.setInitial](data))
			})

		return () => controller.abort()
	}, [])

	return {
		tasks,
		loading,
		handleChange,
		handleSubmit,
		taskInput,
		deleteTask
	}
}