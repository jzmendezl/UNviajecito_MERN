import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: 'joemendez',
  api_key: '919184242848877',
  api_secret: '68OWJgNo13ZfVu_-5FP4nWyxHfc'
})

export const uploadPhotoUser = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: 'usersPhoto'
  })
}

export const deletePhotoUser = async (id) => {
  return await cloudinary.uploader.destroy(id)
}