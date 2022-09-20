import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    trim: true
  },
  lastname: {
    type: String,
    trim: true
  },
  celPhone: {
    type: Number,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: false
  },
  vehicle: {
    type: Array,
    required: false,
  },
  favorite: {
    type: Array,
    required: false,
  },
  wheelHist: {
    type: Array,
    required: true,
  },
  photoUser: {
    url: String,
    publicId: String
  },
  userWheels: {
    type: Array,
    required: false,
  }
}, {
  timestamps: true
}, {
  timestamps: true
})

export default mongoose.model('User', userSchema)