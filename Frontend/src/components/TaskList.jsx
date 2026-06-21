import React from "react"
import TaskItem from "./TaskItem"

function TaskList({ tasks, onApplyChanges, onDeleteTask }) {
	return (
		<section className="mx-auto mt-6 w-full max-w-6xl px-4 pb-12 sm:mt-8 sm:px-6">
			<div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
				<div className="border-b border-neutral-200 px-6 py-5 dark:border-neutral-800">
					<p className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase dark:text-neutral-400">Task Board</p>
					{/* Let the board header wrap cleanly on narrow screens. */}
					<div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
						<div>
							<h2 className="text-2xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">My Tasks</h2>
							<p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">A focused view of what needs attention this week.</p>
						</div>
						<span className="self-start rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 sm:self-auto">
							{tasks.length} tasks
						</span>
					</div>
				</div>

				{/* Cards naturally reflow as the screen gets smaller. */}
				<div className="grid gap-4 p-6 md:grid-cols-2 xl:grid-cols-3">
					{tasks.map((task) => (
						<TaskItem
							key={task._id}
							task={task}
							onApplyChanges={onApplyChanges}
							onDeleteTask={onDeleteTask}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default TaskList
