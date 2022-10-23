import React, { Dispatch } from "react";
import { ToggleOptions } from "../components/ToggleOptions"
import { Icon } from "../components/Icon"
import { AiFillEdit } from "react-icons/ai"
import { RiDeleteBin6Fill } from "react-icons/ri"
import { rowContext as RowContext } from "../contexts/taskContext";
import { useTasks } from "../hooks/useTasks";
import { useRow } from "../hooks/useRow";
import { ConditionalNode } from "../components/ConditionalNode"
import { InputBox } from "./InputBox";
import { Button } from "./Button";
import { getRowCols } from "../services/getRowCols"

interface RowProps {
	content: string;
	id?: number;
	variant?: "header" | "standard"
}

export const Row: React.FC<RowProps> = ({ content, id, variant = "standard" }) => {
	const { deleteTask, updateTask } = useTasks()
	const { rowState } = useRow(id || NaN)
	const { dispatch, isInEditMode } = rowState

	return (
		<RowContext.Provider value={rowState}>
			<div className={`row ${getRowCols(isInEditMode)}`}>
				<ConditionalNode condition={variant === "standard"}>
					<ConditionalNode condition={isInEditMode}>
						<div className="flex w-full justify-between space-x-1">
							<InputBox inputValue={content} />
							<Button title="Done" />
						</div>
					</ConditionalNode>

					<ConditionalNode condition={!isInEditMode}>
						<p>{content}</p>
						<ToggleOptions className="sm:hidden" />
						<Icon
							onClick={() => updateTask(id as number, dispatch as unknown as Dispatch<any>)}
							iconComponent={() => AiFillEdit}
						/>
						<Icon
							onClick={() => deleteTask(id as number)}
							iconComponent={() => RiDeleteBin6Fill}
						/>
					</ConditionalNode>
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