import { useReducer } from "react"
import { RowState } from "../../types"
import { rowReducer } from "../reduces/rowReducer"
import { getRowContextValue } from "../services/getRowContextValue"

export const useRow = (id: number) => {
	const contextValue = getRowContextValue(id)
	const [rowInitialValue, dispatch] = useReducer(rowReducer as () => RowState, contextValue as RowState)
	const rowState: RowState = {
		...rowInitialValue,
		dispatch
	}

	return {
		rowState
	}
}