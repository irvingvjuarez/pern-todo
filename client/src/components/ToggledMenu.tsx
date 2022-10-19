import { useContext } from "react"
import { TaskContext } from "../contexts/taskContext";

interface ToggledMenuProps {
	menuRef: React.MutableRefObject<HTMLUListElement | null>;
	onBlur: () => void
}

export const ToggledMenu: React.FC<ToggledMenuProps> = ({ menuRef, onBlur }) => {
	const taskId = useContext(TaskContext)

	return (
		<ul
			tabIndex={-1}
			ref={menuRef}
			className="absolute right-full top-0 bg-sub-bg border-contrast border-2 p-2 outline-none"
			onBlur={onBlur}
		>
			<li>Edit</li>
			<li>Delete</li>
		</ul>
	)
}