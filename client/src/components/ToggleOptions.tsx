import { SlOptionsVertical } from "react-icons/sl"
import { useToggleOptions } from "../hooks/useToggleOptions"
import { ToggledMenu } from "./ToggledMenu"

export const ToggleOptions = () => {
	const { open, handleClick, toggleOpen, menuRef } = useToggleOptions()

	return (
		<div className="flex justify-center items-center relative" onClick={handleClick}>
			<SlOptionsVertical className="text-center"/>

			{open && <ToggledMenu
				onBlur={toggleOpen}
				menuRef={menuRef}
			/>}
		</div>
	)
}