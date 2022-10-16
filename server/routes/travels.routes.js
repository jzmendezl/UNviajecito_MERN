import { Router } from "express";
import { addTravel, getTravel, getAllTravels } from "../controllers/travels.controlles.js";

const routerTravel = Router()

routerTravel.post('/travels', addTravel)
routerTravel.get('/travels/:id', getTravel)
routerTravel.get('/travels', getAllTravels)

export default routerTravel