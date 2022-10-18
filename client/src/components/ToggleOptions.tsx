import { SlOptionsVertical } from "react-icons/sl"
import { useToggleOptions } from "../hooks/useToggleOptions"

export const ToggleOptions = () => {
	const { open, handleClick, toggleOpen, menuRef } = useToggleOptions()

	return (
		<div className="flex justify-center items-center relative" onClick={handleClick}>
			<SlOptionsVertical className="text-center"/>

			{open && (
				<ul
					tabIndex={-1}
					ref={menuRef}
					className="absolute right-full top-0 bg-sub-bg border-contrast border-2 p-2"
					onBlur={toggleOpen}
				>
					<li>Edit</li>
					<li>Delete</li>
				</ul>
			)}
		</div>
	)
}