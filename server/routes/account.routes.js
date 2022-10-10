import { Router } from "express";
import { showAccount,editAccount,deleteAccount,addCar } from '../controllers/account.controlles.js'
import { protect } from "../middleware/authMiddleware.js";

const router = Router()

router.get('/user/account/:id', showAccount)

router.put('/user/account/:id', editAccount)

router.delete('/user/account/:id', deleteAccount)

//router.post('/user/account/NewCar', addCar)


export default router