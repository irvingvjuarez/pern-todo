import { Task } from "../../../types";

export interface InitialState {
	loading: boolean;
	error: null | Error;
	tasks: Task[]
}

export const initialState: InitialState = {
	loading: false,
	error: null,
	tasks: []
}