import { createAuthClient } from "better-auth/react"

// Frontend auth client for session-aware UI updates.
export const authClient = createAuthClient({
    baseURL: "http://localhost:3000"
})