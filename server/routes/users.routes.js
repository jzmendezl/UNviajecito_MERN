import { Router } from "express";
import { getUsers, createUsers, updateUser, deleteUser, getUser, loginUser } from '../controllers/users.controlles.js'

const router = Router()

router.get('/users', getUsers)

router.post('/register', createUsers)

router.post('/login', loginUser)

router.put('/users/:id', updateUser)

router.delete('/users/:id', deleteUser)

router.get('/users/:id', getUser)


export default router