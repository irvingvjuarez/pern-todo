import { ToggleOptions } from "../components/ToggleOptions"

interface RowProps {
	content: string;
	variant?: "header" | "standard"
}

export const Row: React.FC<RowProps> = ({ content, variant = "standard" }) => {
	return (
		<div
			className="w-full grid grid-cols-[1fr_25px] justify-between p-1 border-b-2 border-sub-dark rounded-sm"
		>
			{variant === "standard" ? (
				<>
					<p>{content}</p>
					<ToggleOptions />
				</>
			) : (
				<h2>{content}</h2>
			)}
		</div>
	)
}