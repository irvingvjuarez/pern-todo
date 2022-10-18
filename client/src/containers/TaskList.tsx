import { useTasks } from "../hooks/useTasks"
import { Message } from "../components/Message"
import { Row } from "../components/Row"


export const TaskList = () => {
	const { tasks, loading } = useTasks()

	return (
		<section className="section">
			{loading && <Message content="Loading..." />}

			{!loading && tasks.length > 0 && (
				<>
					<Row variant="header" content="Tasks" />

					{tasks.map(({id, content}) => (
						<Row key={id} content={content} />
					))}
				</>
			)}

			{!loading && tasks.length <= 0 && (
				<Message content="No tasks available." />
			)}
		</section>
	)
}