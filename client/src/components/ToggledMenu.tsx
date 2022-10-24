import { Dispatch, useContext } from "react"
import { rowContext } from "../contexts/taskContext";
import { useTasks } from "../hooks/useTasks";

interface ToggledMenuProps {
	menuRef: React.MutableRefObject<HTMLUListElement | null>;
	onBlur: () => void
}

export const ToggledMenu: React.FC<ToggledMenuProps> = ({ menuRef, onBlur }) => {
	const {id: taskId, dispatch} = useContext(rowContext)
	const { deleteTask, setEditMode } = useTasks()

	return (
		<ul
			tabIndex={-1}
			ref={menuRef}
			className="absolute right-full top-0 bg-sub-bg border-contrast border-2 p-2 outline-none"
			onBlur={onBlur}
		>
			<li onClick={() => setEditMode(taskId, dispatch as unknown as Dispatch<any>)}>Edit</li>
			<li onClick={() => deleteTask(taskId)}>Delete</li>
		</ul>
	)
}