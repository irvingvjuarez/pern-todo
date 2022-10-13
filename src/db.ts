import { config } from "dotenv"
import { Pool } from "pg"

config()

export const db = new Pool({
	user: process.env.USER,
	password: process.env.PASSWORD,
	host: process.env.HOST,
	port: Number(process.env.PORT) || 5432,
	database: process.env.DATABASE
})