import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Task } from "../../../types";
import { EActionTypes } from "./actions.types";

const tasksSlice = createSlice({
	name: "tasks",
	initialState: [],
	reducers: {
		[EActionTypes.setInitial](state, action) {
			state = action.payload
		},
		[EActionTypes.add](state: Task[], action) {
			state = [...state, action.payload]
		},
		[EActionTypes.substract](state: Task[], action) {
			state = state.filter(task => task.id !== action.payload)
		}
	}
})

export const TasksActions = tasksSlice.actions

export const TasksStore = configureStore({
	reducer: tasksSlice.reducer
})