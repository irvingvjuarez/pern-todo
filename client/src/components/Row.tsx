import React, { Dispatch, useContext } from "react";
import { ToggleOptions } from "../components/ToggleOptions"
import { Icon } from "../components/Icon"
import { AiFillEdit } from "react-icons/ai"
import { RiDeleteBin6Fill } from "react-icons/ri"
import { rowContext, rowContext as RowContext } from "../contexts/taskContext";
import { useTasks } from "../hooks/useTasks";
import { useRow } from "../hooks/useRow";
import { ConditionalNode } from "../components/ConditionalNode"
import { InputBox } from "./InputBox";
import { Button } from "./Button";

interface RowProps {
	content: string;
	id?: number;
	variant?: "header" | "standard"
}

export const Row: React.FC<RowProps> = ({ content, id, variant = "standard" }) => {
	const { deleteTask, updateTask } = useTasks()
	const { rowState } = useRow(id || NaN)
	const { dispatch } = rowState

	return (
		<RowContext.Provider value={rowState}>
			<div className={`row ${rowState.isInEditMode ? "grid-cols-[1fr]" : "grid-cols-[1fr_25px] sm:grid-cols-[1fr_35px_60px]"}`}>
				<ConditionalNode condition={variant === "standard"}>
					{rowState.isInEditMode ? (
						<div className="flex w-full justify-between space-x-1">
							<InputBox inputValue={content} />
							<Button title="Done" />
						</div>
					) : (
						<>
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
						</>
					)}

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