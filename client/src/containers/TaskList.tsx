import { useTasks } from "../hooks/useTasks"
import { SlOptionsVertical } from "react-icons/sl"
import { Message } from "../components/Message"
import { Row } from "../components/Row"

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
							<div className="flex justify-center items-center">
								<SlOptionsVertical className="text-center" />
							</div>
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