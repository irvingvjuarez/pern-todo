import { SlOptionsVertical } from "react-icons/sl"

export const ToggleOptions = () => {
	const handleClick = () => {
		console.log("Hello World")
	}

	return (
		<div className="flex justify-center items-center">
			<SlOptionsVertical
				className="text-center"
				onClick={handleClick}
			/>
		</div>
	)
}