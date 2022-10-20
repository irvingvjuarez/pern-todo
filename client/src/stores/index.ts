import { createSlice, configureStore } from "@reduxjs/toolkit";
import { EActionTypes } from "./actions.types";
import { initialState } from "./initialState";

const tasksSlice = createSlice({
	name: "tasks",
	initialState: initialState,
	reducers: {
		[EActionTypes.setInitial](state, action) {
			state.tasks = action.payload
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
		}
	}
})

export const TasksActions = tasksSlice.actions

export const TasksStore = configureStore({
	reducer: tasksSlice.reducer
})