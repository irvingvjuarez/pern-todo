import { useEffect, useState } from "react"

export const TaskList = () => {
	const [tasks, setTasks] = useState([])

	useEffect(() => {
		fetch("http://localhost:3000/api/v1/tasks")
			.then(res => res.json())
			.then(data => setTasks(data))
	}, [])

	return (
		<section className="section">
			{tasks.length > 0 ? (
				<>
					<div className="w-full grid grid-cols-[1fr_85px] justify-between p-1 border-b-2 border-sub-dark rounded-sm">
						<h2>Task</h2>
					</div>
					<p>There are tasks</p>
				</>
			) : (
				<span className="my-3 block">
					No tasks available.
				</span>
			)}
		</section>
	)
}