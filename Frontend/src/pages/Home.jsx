import React, { useEffect, useState } from "react"
import TaskForm from "../components/TaskForm"
import TaskList from "../components/TaskList"
import { deleteTodo, getTodos, updateTodo } from "../services/todoServices";
import { ToastContainer, toast } from "react-toastify";
import { authClient } from "../lib/auth-client";
import { Navigate } from "react-router-dom";

function HomePage() {
  //Sending to the signup route if not logged in.
  const {data:session,isPending}=authClient.useSession()
  if(!session){
    return <Navigate to="/signup" replace/>
  }
  const [tasks, setTasks] = useState([]);
  const getTodosFromDB = async () => {
    const res = await getTodos()
    setTasks(res.data)
  }
  // Load the current user's todos once on mount.
  useEffect(() => {
    getTodosFromDB()
  }, [])


  const handleApplyChanges = async (taskId, nextContent, nextStatus) => {
    try {
      await updateTodo(taskId, nextContent, nextStatus);

      // Keep the UI in sync after an update without refetching.
      setTasks((currentTasks) =>
        currentTasks.map((task) =>
          task._id === taskId
            ? {
              ...task,
              content: nextContent,
              status: nextStatus,
            }
            : task
        )
      );
      toast.success("Todo updated successfully!");
    } catch (error) {
      toast.error("Failed to update todo!");
      console.error(error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTodo(taskId);
      // Remove the card locally after the API confirms deletion.
      setTasks((currentTasks) => currentTasks.filter((task) => task._id !== taskId));
      toast.success("Todo deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete todo!");
      console.error(error);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-50 pt-6 pb-12 text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50 sm:pt-8">
      <ToastContainer
      position="top-right"
      autoClose={3000}
      theme="colored"
    />
      <TaskForm setTasks={setTasks} tasks={tasks} />
      <TaskList
        tasks={tasks}
        onApplyChanges={handleApplyChanges}
        onDeleteTask={handleDeleteTask}
      />
    </main>
  )
}

export default HomePage