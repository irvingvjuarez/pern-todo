import { useTasks } from "../hooks/useTasks"
import { Message } from "../components/Message"
import { Row } from "../components/Row"
import { ToggleOptions } from "../components/ToggleOptions"

export const TaskList = () => {
	const { tasks, loading } = useTasks()

	return (
		<section className="section">
			{loading && <Message content="Loading..." />}

			{!loading && tasks.length > 0 && (
				<>
					<Row>
						<h2>Task</h2>
					</Row>

					{tasks.map(task => (
						<Row key={task.id}>
							<p>{task.content}</p>
							<ToggleOptions />
						</Row>
					))}
				</>
			)}

			{!loading && tasks.length <= 0 && (
				<Message content="No tasks available." />
			)}
		</section>
	)
}