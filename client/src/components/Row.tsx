import { ToggleOptions } from "../components/ToggleOptions"
import { Icon } from "../components/Icon"
import { AiFillEdit } from "react-icons/ai"
import { RiDeleteBin6Fill } from "react-icons/ri"

interface RowProps {
	content: string;
	variant?: "header" | "standard"
}

export const Row: React.FC<RowProps> = ({ content, variant = "standard" }) => {
	return (
		<div
			className="w-full grid grid-cols-[1fr_25px] justify-between p-1 border-b-2 border-sub-dark rounded-sm sm:grid-cols-[1fr_35px_60px]"
		>
			{variant === "standard" ? (
				<>
					<p>{content}</p>
					<ToggleOptions className="sm:hidden" />
					<Icon iconComponent={() => AiFillEdit} />
					<Icon iconComponent={() => RiDeleteBin6Fill} />
				</>
			) : (
				<>
					<h2>{content}</h2>
					<h3>Edit</h3>
					<h3>Remove</h3>
				</>
			)}
		</div>
	)
}