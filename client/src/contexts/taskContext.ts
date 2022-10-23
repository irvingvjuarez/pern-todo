import { createContext } from "react"

export const RowContext = createContext({
	id: NaN,
	isInEditMode: false,
	dispatch: (obj: any) => null
})