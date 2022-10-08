import dotenv from 'dotenv'

dotenv.config()

export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://UNviajecito_Joe:UNviajecito123321@cluster0.4j0peqz.mongodb.net/db_UNviajecito'
export const PORT = process.env.PORT || 4000