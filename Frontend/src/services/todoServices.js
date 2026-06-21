import api from "../utils/axiosInstance";

// Utility to create a new todo.
export const createTodo = async (content) => {
    const response = await api.post("/todo/create", {
        content,
    });

    return response.data;
};

// Utility to fetch the current user's todos.
export const getTodos = async () => {
    const response = await api.get("/todo/gettodos");
    return response.data;
};

// Utility to delete a todo by id.
export const deleteTodo = async (id) => {
    const response = await api.delete(`/todo/deletetodo/${id}`);
    return response.data;
};

// Utility to update todo content and status.
export const updateTodo = async (id, content, status) => {
    const response = await api.patch(`/todo/update/${id}`, {
        content,
        status,
    });
    return response.data;
};