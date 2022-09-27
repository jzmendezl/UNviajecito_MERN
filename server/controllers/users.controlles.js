import User from '../models/User.js';
import { uploadPhotoUser, deletePhotoUser } from "../libs/cloudinary.js";
import { encrypt, compare } from '../libs/bcrypt.js';
import jwt from 'jsonwebtoken'

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const authUser = await User.findOne({ email })

    if (authUser && (await compare(password, authUser.password))) {
      return res.status(201).json({
        userName: authUser.userName,
        celPhone: authUser.celPhone,
        email: authUser.email,
        photoUser: authUser.photoUser,
        token: generateToken(authUser._id)
      })
    } else {
      return res.status(401).json({ message: 'Invalid Credentials' })
    }
    // if (!authUser) {
    //   res.status(404)
    //   res.send({
    //     error: 'User not found'
    //   })
    //   return
    // }

    // const checkPassword = await compare(password, authUser.password)

    // if (checkPassword) {
    //   res.send(authUser)
    //   return
    // }

    // if (!checkPassword) {
    //   res.status(409)
    //   res.send({
    //     error: 'Invalid Password'
    //   })
    //   return
    // }

  } catch (error) {
    return res.status(401).json({ message: error.message })
  }
}

export const createUsers = async (req, res) => {
  try {
    const { userName, celPhone, email, password } = req.body

    const hashedPassword = await encrypt(password)

    const user = await User.findOne({ email })

    // * image dafault

    let photoUser = {
      "url": "https://res.cloudinary.com/joemendez/image/upload/v1663568344/usersPhoto/rzdivknzd1ojeeqtdg40.png",
      "publicId": "usersPhoto/rzdivknzd1ojeeqtdg40"
    };

    const newUser = await User.create({
      userName,
      celPhone,
      email,
      password: hashedPassword,
      photoUser,
    })

    if (newUser) {
      return res.status(201).json({
        userName,
        celPhone,
        email,
        photoUser,
        token: generateToken(newUser._id)
      })
    }

  } catch (error) {
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

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    console.error(error.message);

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

export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })
}