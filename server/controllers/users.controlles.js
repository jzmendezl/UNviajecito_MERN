import User from '../models/User.js';
import { uploadPhotoUser, deletePhotoUser } from "../libs/cloudinary.js";
import { encrypt, compare } from '../libs/bcrypt.js';
import jwt from 'jsonwebtoken'
import { sendEmail, getTemplate } from "../libs/confirmMail.js";
import fs from "fs-extra";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const authUser = await User.findOne({ email })

    if (authUser && (await compare(password, authUser.password))) {
      return res.status(201).json({
        UID: authUser._id,
        token: generateToken(authUser._id)
      })
    } else {
      return res.status(401).json({ message: 'Invalid Credentials' })
    }

  } catch (error) {
    return res.status(401).json({ message: error.message })
  }
}

export const createUsers = async (req, res) => {
  try {
    const { userName, celPhone, email, password } = req.body

    const hashedPassword = await encrypt(password)

    await User.findOne({ email })

    // if (req.files.photoUser) {
    //   const res = await uploadPhotoUser(req.files.photoUser.tempFilePath)
    //   console.log(res);
    // }

    // * image dafault

    let photoUser = {
      "url": "https://res.cloudinary.com/joemendez/image/upload/v1666375716/usersPhoto/IconUser_dqau58.png",
      "public_id": 'usersPhoto/k2kfvqwqj6v0iuqknhxz'
    };

    const newUser = await User.create({
      userName,
      celPhone,
      email,
      password: hashedPassword,
      photoUser,
    })

    if (newUser) {
      const token = generateToken(newUser._id)
      const template = getTemplate(newUser.userName, token)
      await sendEmail(newUser.email, 'Verify Your Email', template)
      return res.status(201).json({
        userName,
        celPhone,
        email,
        photoUser,
        token
      })
    }

  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message, id: error.code })
  }
}

export const updateUser = async (req, res) => {
  try {
    const {id} = req.params

    if (req.files?.photoUser) {
      const result = await uploadPhotoUser(req.files.photoUser.tempFilePath)
      await fs.remove(req.files.photoUser.tempFilePath);
      req.body.photoUser = {
        url: result.secure_url,
        publicId: result.public_id
      }
    }

    const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    
    return res.json(updatedUser)

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message })
  }
}

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) {
      return res.sendStatus(404)
    }

    const newUser = {
      email: user.email,
      celPhone: user.celPhone,
      userName: user.userName,
      vehicle: user.vehicle,
      favorite: user.favorite,
      wheelHist: user.wheelHist,
      photoUser: user.photoUser,
      userWheels: user.userWheels,
      verifyAccount: user.verifyAccount
    }
    return res.json(newUser)
    // return res.send({newUser})

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

export const getTokenData = (token) => {

  let data = jwt.decode(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log('Error al obtener data del token');
    } else {
      data = decoded;
    }
  }
  );

  return data;
}

export const confirmUser = async (req, res) => {
  try {
    const { token } = req.params
    const data = await getTokenData(token)

    if (data === null) {
      return res.json({
        success: false,
        msg: 'Error al obtener data'
      });
    }

    const user = await User.findById(data.id) || null

    // Actualizar usuario
    user.verifyAccount = true
    await user.save();

    // Redireccionar a la confirmación
    return res.redirect(`https://unviajecito.herokuapp.com`);

  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      msg: 'Error al confirmar usuario'
    });
  }
}

