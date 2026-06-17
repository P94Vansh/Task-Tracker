import { MongoClient } from "mongodb";
import { DB_NAME } from "../constants.js";
const client=new MongoClient(process.env.MONGODB_URI)
await client.connect()
export const db=client.db(DB_NAME)