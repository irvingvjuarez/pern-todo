import { Action, RowState } from "../../types"

export const rowReducer = (state: RowState, action: Action) => {
	const { type, payload } = action

	switch (type) {
		case "toggleEditMode":
			return {
				...state,
				isInEditMode: !state.isInEditMode
			}
		default:
			return state
	}
}