interface MessageProps {
	content: string;
}

export const Message: React.FC<MessageProps> = ({ content }) => {
	return <span className="my-3 block">
		{content}
	</span>
}