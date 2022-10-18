import { useRef, useState } from "react"
import { SlOptionsVertical } from "react-icons/sl"

export const ToggleOptions = () => {
	const menuRef = useRef<HTMLUListElement | null>(null)
	const [open, setOpen] = useState(false)
	const toggleOpen = () => setOpen(prev => {
		if (!prev) {
			setTimeout(() => {
				menuRef.current?.focus()
			}, 0)
		}
		return !prev
	})
	const handleClick = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		evt.stopPropagation()
		toggleOpen()
	}

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