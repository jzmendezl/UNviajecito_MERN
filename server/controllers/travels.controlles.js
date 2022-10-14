import Travel from "../models/Travels.js";

export const addTravel = async (req, res) => {
    try {
        const {
            userName,
            contact,
            source,
            destiny,
            price,
            dateTime,
            remark,
            vehicle
        } = req.body
        // await Travel.findOne({ userName })
        console.log('body', userName, contact, source, destiny, price, remark);

        const newTravel = await Travel.create({
            userName,
            contact,
            vehicle,
            source,
            destiny,
            price,
            dateTime,
            remark
        })
        console.log(newTravel);
        newTravel.save()

        const tid = newTravel._id

        return res.status(201).json({
            userName,
            contact,
            vehicle,
            source,
            destiny,
            price,
            dateTime,
            remark,
            tid
        })

    } catch (error) {
        return res.json({ message: 'Error al crear el viaje' })
    }
}