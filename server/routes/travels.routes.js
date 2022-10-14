import { Router } from "express";
import { addTravel } from "../controllers/travels.controlles.js";

const routerTravel = Router()

routerTravel.post('/travels', addTravel)

export default routerTravel