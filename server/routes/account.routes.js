import { Router } from "express";
import { getAllUsers, createUsers, updateUser, deleteUser, getUser, loginUser } from '../controllers/account.controlles.js'
import { protect } from "../middleware/authMiddleware.js";

const router = Router()

router.get('/users', getAllUsers)

router.post('/register', createUsers)

router.post('/login', loginUser)

router.put('/users/:id', updateUser)

router.delete('/users/:id', deleteUser)

router.get('/users/:id', protect, getUser)


export default router