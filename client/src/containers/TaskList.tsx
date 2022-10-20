import { useSelector } from "react-redux"
import { InitialState } from "../stores/initialState"
import { Message } from "../components/Message"
import { Row } from "../components/Row"
import { ConditionalNode } from "../components/ConditionalNode"

export const TaskList = () => {
	const tasks = useSelector((state: InitialState) => state.tasks)
	const loading = useSelector((state: InitialState) => state.loading)
	const areTasksAvailable = !loading && tasks.length > 0

	return (
		<section className="section">
			<ConditionalNode condition={loading}>
				<Message content="Loading..." />
			</ConditionalNode>

			<ConditionalNode condition={areTasksAvailable}>
				<Row variant="header" content="Tasks" />
				<>{tasks.map(({id, content}) =>
						<Row key={id} content={content} id={id} />
				)}</>
			</ConditionalNode>

			<ConditionalNode condition={!areTasksAvailable}>
				<Message content="No tasks available." />
			</ConditionalNode>
		</section>
	)
}