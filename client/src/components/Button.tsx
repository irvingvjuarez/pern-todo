interface ButtonProps {
	title?: string
}

export const Button: React.FC<ButtonProps> = ({ title = "Add" }) => {
	return(
		<button className="font-bold bg-contrast text-[#fff] rounded-sm px-2 py-1 tracking-wide">
			{title}
		</button>
	)
}