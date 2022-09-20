import express from "express";
import fileUpload from "express-fileupload";
import usersRoutes from "./routes/users.routes.js";
import cors from 'cors'


const app = express()

// * Midelware

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './upload'
}))

// * Routes

app.use(usersRoutes)

export default app