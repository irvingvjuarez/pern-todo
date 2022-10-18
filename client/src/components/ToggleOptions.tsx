import { SlOptionsVertical } from "react-icons/sl"
import { useToggleOptions } from "../hooks/useToggleOptions"
import { ToggledMenu } from "./ToggledMenu"
import { ConditionalNode } from "./ConditionalNode"

interface ToggleOptionsProps {
	className?: string;
}
export const ToggleOptions: React.FC<ToggleOptionsProps> = ({ className }) => {
	const { open, handleClick, toggleOpen, menuRef } = useToggleOptions()

	return (
		<div className={`flex justify-center items-center relative ${className}`} onClick={handleClick}>
			<SlOptionsVertical className="text-center"/>

			<ConditionalNode condition={open}>
				<ToggledMenu onBlur={toggleOpen} menuRef={menuRef} />
			</ConditionalNode>
		</div>
	)
}