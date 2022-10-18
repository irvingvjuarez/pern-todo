import { IconType } from "react-icons/lib"

interface IconProps {
	iconComponent: () => IconType
}

export const Icon: React.FC<IconProps> = ({ iconComponent }) => {
	const Element = iconComponent()

	return (
		<div className="hidden items-center justify-center sm:flex">
			<Element className="text-sub-dark hover:text-contrast" />
		</div>
	)
}