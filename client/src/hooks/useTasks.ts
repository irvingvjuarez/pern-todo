import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { TASKS_API } from "../globals"
import { EActionTypes } from "../stores/actions.types"
import { TasksActions } from "../stores"
import { getFetchConfig } from "../services/getFetchConfig"
import { fetchRequest } from "../services/fetchRequest"

export const useTasks = () => {
	const [taskInput, setTaskInput] = useState("")
	const dispatch = useDispatch()

	const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setTaskInput(evt.target.value)
	}

	const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		const fetchConfig = getFetchConfig("POST", taskInput)
		const data = await fetchRequest(TASKS_API, fetchConfig) as any
		const newTask = data.rows[0]

		setTaskInput("")
		dispatch(TasksActions[EActionTypes.add](newTask))
	}

	const deleteTask = async (id: number) => {
		const fetchConfig = getFetchConfig("DELETE")
		const data = await fetchRequest(`${TASKS_API}/${id}`, fetchConfig)
		const deletedTaskId = data.rows[0].id

		dispatch(TasksActions[EActionTypes.substract](deletedTaskId))
	}

	const updateTask = async (id: number) => {
		console.log(`ID #${id} updated`)
	}

	useEffect(() => {
		const controller = new AbortController()

		const getTasks = async () => {
			const { signal } = controller
			const data = await fetchRequest(TASKS_API, {signal})
			dispatch(TasksActions[EActionTypes.setInitial](data))
		}

		getTasks()

		return () => controller.abort()
	}, [])

	return {
		handleChange,
		handleSubmit,
		taskInput,
		deleteTask,
		updateTask
	}
}