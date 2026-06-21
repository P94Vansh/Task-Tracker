import axios from "axios";

// Shared API client for authenticated frontend requests.
const api = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    withCredentials: true,
});

export default api;