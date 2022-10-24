import { createSlice, configureStore } from "@reduxjs/toolkit";
import { EActionTypes } from "./actions.types";
import { initialState } from "./initialState";

const tasksSlice = createSlice({
	name: "tasks",
	initialState: initialState,
	reducers: {
		[EActionTypes.setInitial](state, action) {
			state.tasks = action.payload
			state.loading = false
		},
		[EActionTypes.add](state, action) {
			const { tasks } = state
			const newTasks = [...tasks, action.payload]
			state.tasks = newTasks
		},
		[EActionTypes.substract](state, action) {
			const { tasks } = state
			const newTasks = tasks.filter(task => task.id !== action.payload)
			state.tasks = newTasks
		},
		[EActionTypes.replace](state, action) {
			const { tasks } = state
			const { payload: { id, content } } = action

			const updatedTaskIndex = tasks.findIndex(task => task.id !== id)
			if (updatedTaskIndex) {
				const actualTask = state.tasks[updatedTaskIndex]
				const newTask = {
					...actualTask,
					content
				}

				state.tasks[updatedTaskIndex] = newTask
			}
		}
	}
})

export const TasksActions = tasksSlice.actions

export const TasksStore = configureStore({
	reducer: tasksSlice.reducer
})