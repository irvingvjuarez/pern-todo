interface ButtonProps {
	title?: string;
	onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ title = "Add", onClick }) => {
	const handleClick = () => onClick?.()

	return(
		<button
			className="font-bold bg-contrast text-[#fff] rounded-sm px-2 py-1 tracking-wide"
			onClick={handleClick}
		>
			{title}
		</button>
	)
}