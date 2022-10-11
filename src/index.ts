import express from "express"
import { PORT } from "./globals";
import { useMiddlewares } from "./middlewares";

const app = express();

useMiddlewares(app)

app.get("/ping", (_req, res) => {
	res.send("Pong")
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})
