interface RowProps {
	children: JSX.Element | JSX.Element[]
}

export const Row: React.FC<RowProps> = ({ children }) => {
	return (
		<div className="w-full grid grid-cols-[1fr_25px] justify-between p-1 border-b-2 border-sub-dark rounded-sm">
			<>{children}</>
		</div>
	)
}