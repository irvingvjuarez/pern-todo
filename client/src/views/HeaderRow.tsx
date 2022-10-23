import React from "react"

interface HeaderRowProps {
	content: string
}

export const HeaderRow: React.FC<HeaderRowProps> = ({ content }) => {
	return (
		<>
			<h2>{content}</h2>
			<h3 className="hidden sm:block">Edit</h3>
			<h3 className="hidden sm:block">Remove</h3>
		</>
	)
}