import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { auth } from './utils/auth.js'
import { toNodeHandler } from "better-auth/node";
const app=express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
// Better Auth needs to answer its callback routes before the API routes.
app.all("/api/auth/{*any}", toNodeHandler(auth));
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(cookieParser())
import todoRouter from './routes/todo.route.js'
// Protected todo API.
app.use('/api/v1/todo',todoRouter)
export {app}