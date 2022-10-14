import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
    kind: {
        type: String,
        required: true
    },
    plate: {
        type: String,
        required: true,
        unique: true,
    },
    model: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    seats: {
        type: Number,
        required: true
    },
    UID: {
        type: String,
        required: true
    }
})

export default mongoose.model('Vehicle', vehicleSchema)