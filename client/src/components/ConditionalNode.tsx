interface ConditionalNodeProps {
	condition: boolean;
	children: JSX.Element | JSX.Element[]
}

export const ConditionalNode: React.FC<ConditionalNodeProps> = ({ condition, children }) => {
	if (condition) {
		return <>{children}</>
	}

	return null
}