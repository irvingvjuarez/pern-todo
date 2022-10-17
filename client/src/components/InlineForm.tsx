interface InlineFormProps {
	children: JSX.Element | Array<JSX.Element>
	onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

export const InlineForm: React.FC<InlineFormProps> = (props) => {
	return(
		<form
			className="section flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
			onSubmit={props.onSubmit}
		>
			<>
				{props.children}
			</>
		</form>
	)
}