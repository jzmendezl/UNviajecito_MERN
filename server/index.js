import app from "./app.js";
import { connectDB } from "./database/db.js";
import { PORT } from "./config.js";

connectDB()

app.listen(PORT)
console.log('Server in running port ', PORT);