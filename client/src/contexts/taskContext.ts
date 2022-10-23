import { createContext } from "react"

export const rowContext = createContext({
	id: NaN,
	isInEditMode: false,
	dispatch: null
})