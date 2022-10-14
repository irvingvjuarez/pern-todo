import { useTasks } from "../hooks/useTasks"

export const TaskList = () => {
	const { tasks, loading } = useTasks()

	return (
		<section className="section">
			{loading && <span className="my-3 block">Loading...</span>}

			{!loading && tasks.length > 0 && (
				<>
					<div className="w-full grid grid-cols-[1fr_85px] justify-between p-1 border-b-2 border-sub-dark rounded-sm">
						<h2>Task</h2>
					</div>
					<p>There are tasks</p>
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