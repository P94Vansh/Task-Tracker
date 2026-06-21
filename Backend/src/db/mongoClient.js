import { MongoClient } from "mongodb";
import { DB_NAME } from "../constants.js";
// Shared Mongo client for direct database access where needed.
const client=new MongoClient(process.env.MONGODB_URI)
await client.connect()
export const db=client.db(DB_NAME)