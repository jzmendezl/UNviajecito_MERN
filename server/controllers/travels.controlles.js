import Travel from "../models/Travel.js";

export const addTravel = async (req, res) => {
    try {
        const {
            userName,
            contact,
            email,
            source,
            destiny,
            price,
            dateTime,
            remark,
            vehicle
        } = req.body
        // await Travel.findOne({ userName })
        console.log('body', userName, contact, email, source, destiny, price, remark, vehicle);

        const newTravel = await Travel.create({
            userName,
            contact,
            email,
            vehicle,
            source,
            destiny,
            price,
            dateTime,
            remark,
        })
        console.log(newTravel);
        newTravel.save()

        const tid = newTravel._id

        return res.status(201).json({
            userName,
            contact,
            email,
            vehicle,
            source,
            destiny,
            price,
            dateTime,
            remark,
            tid,

        })

    } catch (error) {
        return res.json({ message: error.message })
    }
}

export const getTravel = async (req, res) => {
    try {
        const travel = await Travel.findById(req.params.id)

        if (!travel) {
            return res.status(404).json({ message: 'No Found Travel' })
        }

        return res.status(200).json(travel)
    } catch (error) {
        return res.json({ message: error.message })
    }
}

export const getAllTravels = async (req, res) => {
    try {
        const travels = await Travel.find()

        if (!travels) {
            return res.status(404).json({ message: 'No Found Travels' })
        }

        return res.status(201).json(travels)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateTravel = async (req, res) => {
    try {
        const updatedTravel = await Travel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        
        return res.send(updatedTravel)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}