import { useContext } from "react"
import { RowContext } from "../contexts/taskContext";
import { useTasks } from "../hooks/useTasks";

interface ToggledMenuProps {
	menuRef: React.MutableRefObject<HTMLUListElement | null>;
	onBlur: () => void
}

export const ToggledMenu: React.FC<ToggledMenuProps> = ({ menuRef, onBlur }) => {
	const {id: taskId, dispatch} = useContext(RowContext)
	const { deleteTask, updateTask } = useTasks()
	const handleEdit = () => dispatch({ type: "toggleEditMode" })

	return (
		<ul
			tabIndex={-1}
			ref={menuRef}
			className="absolute right-full top-0 bg-sub-bg border-contrast border-2 p-2 outline-none"
			onBlur={onBlur}
		>
			<li onClick={() => handleEdit()}>Edit</li>
			<li onClick={() => deleteTask(taskId)}>Delete</li>
		</ul>
	)
}