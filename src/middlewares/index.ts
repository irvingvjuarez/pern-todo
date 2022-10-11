import express from "express"
import { Express } from "express-serve-static-core"

export const useMiddlewares = (app: Express) => {
	app.use(express.json())
}