import React, { useReducer } from "react";
import { ToggleOptions } from "../components/ToggleOptions"
import { Icon } from "../components/Icon"
import { AiFillEdit } from "react-icons/ai"
import { RiDeleteBin6Fill } from "react-icons/ri"
import { rowContext as RowContext } from "../contexts/taskContext";
import { useTasks } from "../hooks/useTasks";
import { ConditionalNode } from "../components/ConditionalNode"
import { getRowContextValue } from "../services/getRowContextValue"
import { rowReducer } from "../reduces/rowReducer"
import { Action, IRowContext, RowState } from "../../types"

interface RowProps {
	content: string;
	id?: number;
	variant?: "header" | "standard"
}

export const Row: React.FC<RowProps> = ({ content, id, variant = "standard" }) => {
	const { deleteTask, updateTask } = useTasks()
	const contextValue = getRowContextValue(id || NaN)
	const [rowState, dispatch] = useReducer(rowReducer as () => RowState, contextValue as RowState)
	const rowInitialValue: RowState = {
		...rowState as unknown as IRowContext,
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