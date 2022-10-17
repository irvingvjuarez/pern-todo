import { useTasks } from "../hooks/useTasks"
import { SlOptionsVertical } from "react-icons/sl"

export const TaskList = () => {
	const { tasks, loading } = useTasks()

	return (
		<section className="section">
			{loading && <span className="my-3 block">Loading...</span>}

			{!loading && tasks.length > 0 && (
				<>
					<div className="w-full grid grid-cols-[1fr_25px] justify-between p-1 border-b-2 border-sub-dark rounded-sm">
						<h2>Task</h2>
					</div>
					{tasks.map(task => (
						<div key={task.id} className="w-full grid grid-cols-[1fr_25px] justify-between px-1 py-2 border-b-2 border-sub-dark rounded-sm">
							<p>{task.content}</p>
							<div className="flex justify-center items-center">
								<SlOptionsVertical className="text-center" />
							</div>
						</div>
					))}
				</>
			)}

			{!loading && tasks.length <= 0 && (
				<span className="my-3 block">
					No tasks available.
				</span>
			)}
		</section>
	)
}