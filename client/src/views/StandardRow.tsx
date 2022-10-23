import React, {Dispatch} from "react"
import { ConditionalNode } from "../components/ConditionalNode"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { ToggleOptions } from "../components/ToggleOptions"
import { Icon } from "../components/Icon"
import { useTasks } from "../hooks/useTasks"

import { AiFillEdit } from "react-icons/ai"
import { RiDeleteBin6Fill } from "react-icons/ri"

interface StandardRowProps {
	rowId: number;
	content: string;
	editMode: boolean;
	dispatch: Dispatch<any>
}

export const StandardRow: React.FC<StandardRowProps> = ({ rowId, content, editMode, dispatch }) => {
	const { deleteTask, updateTask } = useTasks()

	return(
		<>
			<ConditionalNode condition={editMode}>
				<div className="flex w-full justify-between space-x-1">
					<InputBox inputValue={content} />
					<Button title="Done" />
				</div>
			</ConditionalNode>

			<ConditionalNode condition={!editMode}>
				<p>{content}</p>
				<ToggleOptions className="sm:hidden" />
				<Icon
					onClick={() => updateTask(rowId as number, dispatch as unknown as Dispatch<any>)}
					iconComponent={() => AiFillEdit}
				/>
				<Icon
					onClick={() => deleteTask(rowId as number)}
					iconComponent={() => RiDeleteBin6Fill}
				/>
			</ConditionalNode>
		</>
	)
}