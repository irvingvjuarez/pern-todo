import { useState } from "react"
import { SlOptionsVertical } from "react-icons/sl"

export const ToggleOptions = () => {
	const [open, setOpen] = useState(false)
	const toggleOpen = () => setOpen(prev => !prev)

	return (
		<div className="flex justify-center items-center relative">
			<SlOptionsVertical
				className="text-center"
				onClick={toggleOpen}
				onBlur={toggleOpen}
			/>

			{open && (
				<ul className="absolute right-full top-0 bg-sub-bg border-contrast border-2 p-2">
					<li>Edit</li>
					<li>Delete</li>
				</ul>
			)}
		</div>
	)
}