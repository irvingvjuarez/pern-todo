import { SlOptionsVertical } from "react-icons/sl"
import { useToggleOptions } from "../hooks/useToggleOptions"
import { ToggledMenu } from "./ToggledMenu"
import { ConditionalNode } from "./ConditionalNode"

export const ToggleOptions = () => {
	const { open, handleClick, toggleOpen, menuRef } = useToggleOptions()

	return (
		<div className="flex justify-center items-center relative" onClick={handleClick}>
			<SlOptionsVertical className="text-center"/>

			<ConditionalNode condition={open}>
				<ToggledMenu onBlur={toggleOpen} menuRef={menuRef} />
			</ConditionalNode>
		</div>
	)
}