import { Router } from "express";
import { addVehicle } from "../controllers/vehicle.controller.js";

const router = Router()

router.post('/vehicle', addVehicle)


export default router