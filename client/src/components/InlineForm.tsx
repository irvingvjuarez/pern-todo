interface InlineFormProps {
	children: JSX.Element | Array<JSX.Element>
}

export const InlineForm: React.FC<InlineFormProps> = ({ children }) => {
	return(
		<form className="section flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
			<>
				{children}
			</>
		</form>
	)
}