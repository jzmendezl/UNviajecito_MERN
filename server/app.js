import express from "express";
import fileUpload from "express-fileupload";
import usersRoutes from "./routes/users.routes.js";
import vehiclesRoutes from "./routes/vehicle.routes.js"
import travelsRoutes from "./routes/travels.routes.js";
import cors from 'cors'
import path from "path"
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);
console.log(path.join(__dirname, '/dist', 'index.html'));

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
// app.use(vehiclesRoutes)
app.use(travelsRoutes)

//  * deployment

// __dirname = path.resolve()
if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'public')))
  app.use("/uploads", express.static(join(__dirname, "public/uploads")));
  app.use(express.static(join(__dirname, "../client/dist")));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
} else {
  app.get("/", (req, res) => {
    res.send('API is Runnung...')
  })
}

//  * deployment

export default app