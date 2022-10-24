import React from "react"

interface InputBoxProps {
	ref?: React.LegacyRef<HTMLInputElement>
	onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void
	inputValue?: string;
	defaultValue?: string;
}

export const InputBox: React.FC<InputBoxProps> = (props) => {
	return(
		<input
			ref={props.ref}
			onChange={props.onChange}
			value={props.inputValue}
			defaultValue={props.defaultValue}
			type="text"
			className="p-1 text-base border-contrast border rounded-md w-full"
			placeholder="Description"
		/>
	)
}