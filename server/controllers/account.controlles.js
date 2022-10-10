import User from '../models/User.js';
import { uploadPhotoUser, deletePhotoUser } from "../libs/cloudinary.js";
import { encrypt, compare } from '../libs/bcrypt.js';
import jwt from 'jsonwebtoken'

export const editAccount = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    
        let photoUser;
    
        if (req.files && req.files.photoUser) {
          const result = await uploadPhotoUser(req.files.photoUser.tempFilePath)
          photoUser = {
            url: result.secure_url,
            publicId: result.public_id
          }
        }
    
        return res.send(updatedUser)
    
      } catch (error) {
    
        return res.status(500).json({ message: error.message })
      }
    }
export const showAccount = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
    if(!user){
        return res.sendStatus(404)
    }
    const newUser = {
        email: user.email,
        celPhone: user.celPhone,
        userName: user.userName,
        photoUser: user.photoUser
    }
    return res.send(newUser)
} catch (error) {
    return res.status(500).json({ message: error.message })
}
}


export const deleteAccount = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.sendStatus(404)

        }
        await deletePhotoUser(user.photoUser.publicId)
        await user.deleteOne()
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const  addCar = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.sendStatus(404)
        }
        const newCar = {
            brand: req.body.brand,
            model: req.body.model,
            year: req.body.year,
            color: req.body.color,
            plate: req.body.plate,
            photoCar: req.body.photoCar
        }
        user.cars.push(newCar)
        await user.save()
        return res.send(user)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
