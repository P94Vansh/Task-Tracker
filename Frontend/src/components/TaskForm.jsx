import React, { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import { createTodo } from "../services/todoServices";
function TaskForm({setTasks,tasks}) {
	const [content, setContent] = useState('')
	const handleSubmit = async () => {
		try {
			// Create the todo on the server, then append it locally.
			const res=await createTodo(content);
			console.log(res)
			if(res.statusCode===200){
				toast.success("Todo created successfully");
				setTasks([...tasks,res.data])
				setContent("");
			}
			else{
				toast("Error while creating todo")
			}
		} catch (error) {
			toast.error("Error while creating Todo!");
			console.log(error);
		}
	}
	return (
		<section className="mx-auto mt-6 w-full max-w-3xl px-4 sm:mt-8 sm:px-6">
			<ToastContainer />
			<div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
				<div className="space-y-1">
					<p className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase dark:text-neutral-400">New Task</p>
					<h2 className="text-2xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">Add a task</h2>
					<p className="text-sm text-neutral-600 dark:text-neutral-400">Simple form layout for creating tasks.</p>
				</div>

				<form className="mt-6 space-y-5">
					<div className="space-y-2">
						<label htmlFor="task-content" className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
							Task
						</label>
						<input
							id="task-content"
							type="text"
							placeholder="Write API docs"
							className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100 dark:placeholder:text-neutral-500 dark:focus:border-neutral-500"
							onChange={(e) => setContent(e.target.value)}
							value={content}
						/>
					</div>

					{/* Stack the actions on smaller screens so they never squeeze. */}
					<div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
						<button
							type="button"
							className="w-full rounded-2xl bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 sm:w-auto dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
							onClick={handleSubmit}
						>
							Add Task
						</button>
						<button
							type="button"
							className="w-full rounded-2xl border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 sm:w-auto dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
							onClick={() => { setContent('') }}
						>
							Clear
						</button>
					</div>
				</form>
			</div>
		</section>
	)
}

export default TaskForm
