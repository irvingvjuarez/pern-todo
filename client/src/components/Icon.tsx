import { IconType } from "react-icons/lib"

interface IconProps {
	iconComponent(): IconType;
	onClick?: () => void
}

export const Icon: React.FC<IconProps> = ({ iconComponent, onClick }) => {
	const Element = iconComponent()

	return (
		<div
			onClick={onClick}
			className="hidden items-center justify-center cursor-pointer sm:flex"
		>
			<Element className="text-sub-dark hover:text-contrast" />
		</div>
	)
}