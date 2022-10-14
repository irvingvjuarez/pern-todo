interface InlineFormProps {
	children: JSX.Element | Array<JSX.Element>
}

export const InlineForm: React.FC<InlineFormProps> = ({ children }) => {
	return(
		<form className="bg-sub-bg w-[90%] mx-auto my-3 p-2 rounded-md flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 sm:p-3">
			<>
				{children}
			</>
		</form>
	)
}