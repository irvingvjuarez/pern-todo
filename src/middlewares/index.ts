import express from "express"
import { Express } from "express-serve-static-core"
import cors from "cors"

export const useMiddlewares = (app: Express) => {
	app.use(express.json())
	app.use(cors())
}