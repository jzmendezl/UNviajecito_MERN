import Vehicle from '../models/Vehicle.js';

export const addVehicle = async (req, res) => {
    try {
        const { kind, plate, model, color, seats } = req.body
        console.log(kind, plate, model, color, seats);
        await Vehicle.findOne({ plate })

        const newVehicle = await Vehicle.create({
            kind,
            plate,
            model,
            color,
            seats
        })
        newVehicle.save()

        return res.status(201).json({
            kind,
            plate,
            model,
            color,
            seats,
            id: newVehicle._id
        })

    } catch (error) {
        return res.send(error.message)
    }
}
