import { Router } from "express";
import { addVehicle } from "../controllers/vehicle.controller.js";

const routerVehicle = Router()

routerVehicle.post('/vehicle', addVehicle)


export default routerVehicle