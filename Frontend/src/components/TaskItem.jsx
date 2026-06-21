import React, { useState } from "react"

const statusStyles = {
	pending: "bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-500/10 dark:text-amber-300 dark:ring-amber-300/30",
	completed: "bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-300/30",
}

function TaskItem({ task, onApplyChanges, onDeleteTask }) {
	const badgeStyle = statusStyles[task.status] || statusStyles.Todo
	const [isEditing, setIsEditing] = useState(false)
	const [draftContent, setDraftContent] = useState(task.content)
	const [draftStatus, setDraftStatus] = useState(task.status)

	const handleStartEdit = () => {
		setDraftContent(task.content)
		setDraftStatus(task.status)
		setIsEditing(true)
	}

	const handleApply = () => {
		onApplyChanges(task._id, draftContent, draftStatus)
		setIsEditing(false)
	}

	const handleCancel = () => {
		setDraftContent(task.content)
		setDraftStatus(task.status)
		setIsEditing(false)
	}

	return (
		<article className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 transition-colors hover:bg-white dark:border-neutral-700 dark:bg-neutral-950 dark:hover:bg-neutral-900">
			{isEditing ? (
				// Edit the todo in place without leaving the board.
				<div className="space-y-4">
					<div className="space-y-2">
						<label htmlFor={`task-content-${task._id}`} className="text-xs font-medium tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
							Content
						</label>
						<textarea
							id={`task-content-${task._id}`}
							value={draftContent}
							onChange={(event) => setDraftContent(event.target.value)}
							rows={4}
							className="w-full resize-y rounded-xl border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:focus:border-neutral-500"
						/>
					</div>

					<div className="space-y-2">
						<label htmlFor={`task-status-${task._id}`} className="text-xs font-medium tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
							Status
						</label>
						<select
							id={`task-status-${task._id}`}
							value={draftStatus}
							onChange={(event) => setDraftStatus(event.target.value)}
							className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none transition-colors focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:focus:border-neutral-500"
						>
							<option value="pending">Pending</option>
							<option value="completed">Completed</option>
						</select>
					</div>

					<div className="flex items-center justify-between gap-2 pt-1">
						<button
							type="button"
							onClick={handleApply}
							className="rounded-xl bg-neutral-950 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
						>
							Apply Changes
						</button>
						<button
							type="button"
							onClick={handleCancel}
							className="rounded-xl border border-neutral-300 bg-white px-4 py-2 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
						>
							Cancel
						</button>
					</div>
				</div>
			) : (
				<div className="space-y-4">
					<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
							{/* Long content scrolls inside the card instead of stretching the grid. */}
						<h3 className="min-w-0 max-h-40 overflow-y-auto wrap-break-word whitespace-pre-wrap pr-2 text-base font-semibold text-neutral-900 dark:text-neutral-100">
							{task.content}
						</h3>
						<span className={`inline-flex shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${badgeStyle}`}>
							{task.status}
						</span>
					</div>

					<div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
						<button
							type="button"
							onClick={handleStartEdit}
							className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-100 sm:w-auto dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
						>
							Edit
						</button>
						<button
							type="button"
							onClick={() => onDeleteTask(task._id)}
							className="w-full rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-xs font-medium text-red-700 transition-colors hover:bg-red-100 sm:w-auto dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300 dark:hover:bg-red-500/20"
						>
							Delete
						</button>
					</div>
				</div>
			)}
		</article>
	)
}

export default TaskItem
