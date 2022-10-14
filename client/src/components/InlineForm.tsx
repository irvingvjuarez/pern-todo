interface InlineFormProps {
	children: JSX.Element | Array<JSX.Element>
}

export const InlineForm: React.FC<InlineFormProps> = ({ children }) => {
	return(
		<form>
			<>
				{children}
			</>
		</form>
	)
}