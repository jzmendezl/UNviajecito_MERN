import express from "express";
import fileUpload from "express-fileupload";
import usersRoutes from "./routes/users.routes.js";


const app = express()

// * Midelware

app.use(express.json())
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './upload'
}))

// * Routes

app.use(usersRoutes)

export default app