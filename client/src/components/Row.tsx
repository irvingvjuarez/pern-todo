import { ToggleOptions } from "../components/ToggleOptions"
import { Icon } from "../components/Icon"
import { AiFillEdit } from "react-icons/ai"
import { RiDeleteBin6Fill } from "react-icons/ri"
import { RowContext } from "../contexts/taskContext";
import { useTasks } from "../hooks/useTasks";
import { ConditionalNode } from "../components/ConditionalNode"
import { getRowContextValue } from "../services/getRowContextValue"
import { useReducer } from "react";

interface RowProps {
	content: string;
	id?: number;
	variant?: "header" | "standard"
}

interface RowContext {
	id: number;
	isInEditMode: boolean;
}

interface RowState extends RowContext {
	dispatch: () => void
}

const rowReducer = (state, action) => {
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

export const Row: React.FC<RowProps> = ({ content, id, variant = "standard" }) => {
	const { deleteTask, updateTask } = useTasks()
	const contextValue = getRowContextValue(id || NaN)
	const [rowState, dispatch] = useReducer(rowReducer, contextValue)
	const rowInitialValue = {
		...rowState as unknown as RowContext,
		dispatch
	}

	if (rowInitialValue.isInEditMode) {
		console.log("Transform to input")
	}

	return (
		<RowContext.Provider value={rowInitialValue}>
			<div className="row">
				<ConditionalNode condition={variant === "standard"}>
					<p>{content}</p>
					<ToggleOptions className="sm:hidden" />

					<Icon
						onClick={() => updateTask(id as number)}
						iconComponent={() => AiFillEdit}
					/>
					<Icon
						onClick={() => deleteTask(id as number)}
						iconComponent={() => RiDeleteBin6Fill}
					/>
				</ConditionalNode>

				<ConditionalNode condition={variant !== "standard"}>
					<h2>{content}</h2>
					<h3 className="hidden sm:block">Edit</h3>
					<h3 className="hidden sm:block">Remove</h3>
				</ConditionalNode>
			</div>
		</RowContext.Provider>
	)
}