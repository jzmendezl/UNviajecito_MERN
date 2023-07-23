import { config } from 'dotenv'

config()

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/travels',
  SECRET: process.env.SECRET
}