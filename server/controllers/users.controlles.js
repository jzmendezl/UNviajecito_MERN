import User from '../models/User.js';
import { uploadPhotoUser, deletePhotoUser } from "../libs/cloudinary.js";
import fs from "fs-extra";
import bcrypt from 'bcrypt'

export const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({ message: error.message })
  }
}

export const createUsers = async (req, res) => {
  try {
    const { email, password } = req.body

    await User.findOne({ email })

    // * image

    let photoUser = {
      "url": "https://res.cloudinary.com/joemendez/image/upload/v1663568344/usersPhoto/rzdivknzd1ojeeqtdg40.png",
      "publicId": "usersPhoto/rzdivknzd1ojeeqtdg40"
    };

    if (req.files?.photoUser) {
      const result = await uploadPhotoUser(req.files.photoUser.tempFilePath)
      await fs.remove(req.files.photoUser.tempFilePath)
      photoUser = {
        url: result.secure_url,
        publicId: result.public_id
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({ email, password: hashedPassword, photoUser })
    await newUser.save()


    return res.json(newUser)

  } catch (error) {
    console.log(error);
    console.error(error.message);

    return res.status(500).json({ message: error.message, code: error.code })
  }
}

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })

    let photoUser;

    if (req.files.photoUser) {
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

export const deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id)

    if (!deleteUser) {
      return res.sendStatus(404)
    }

    if (deleteUser.photoUser.publicId) {
      await deletePhotoUser(deleteUser.photoUser.publicId)
    }

    return res.sendStatus(204)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const getUser = async (req, res) => {
  try {
    const getUser = await User.findById(req.params.id)

    if (!getUser) {
      return res.sendStatus(404)
    }

    return res.json(getUser)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const currentUser = await User.findOne({ email })

    if (!currentUser) {
      return res.sendStatus(404)
    }
    if (bcrypt.compare(password, currentUser.password)) {
      const { id, email } = currentUser

      return res.json({ id, email })
    }

    // return res.json(currentUser.data)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}