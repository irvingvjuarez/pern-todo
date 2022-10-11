import express from "express"
import { PORT } from "./globals";
import { useMiddlewares } from "./middlewares";
import { AppRouter } from "./routes";

const app = express();

useMiddlewares(app)

app.use("/api/v1", AppRouter)

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})
