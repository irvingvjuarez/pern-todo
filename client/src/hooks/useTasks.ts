import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { TASKS_API } from "../globals"
import { EActionTypes } from "../stores/actions.types"
import { TasksActions } from "../stores"

const getFetchConfig = (method: "POST" | "DELETE", content?: unknown) => ({
	method,
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json"
	},
	body: JSON.stringify({
		content
	})
})

export const useTasks = () => {
	const [taskInput, setTaskInput] = useState("")
	const dispatch = useDispatch()

	const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setTaskInput(evt.target.value)
	}

	const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()
		const fetchConfig = getFetchConfig("POST", taskInput)

		const request = await fetch(TASKS_API, fetchConfig);
		const data = await request.json()
		const newTask = data.rows[0]

		setTaskInput("")
		dispatch(TasksActions[EActionTypes.add](newTask))
	}

	const deleteTask = async (id: number) => {
		const fetchConfig = getFetchConfig("DELETE")
		const request = await fetch(`${TASKS_API}/${id}`, fetchConfig)
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
		handleChange,
		handleSubmit,
		taskInput,
		deleteTask
	}
}