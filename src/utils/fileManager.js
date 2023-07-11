import userAPI from "../api/userApi"
import { fileUpload } from "./fileUpload"

export const startUploadFiles = async (files = []) => {
  const fileUploadPromises = []

  for (const file of files) {
    fileUploadPromises.push(fileUpload(file))
  }
  const photosUrls = await Promise.all(fileUploadPromises)
  return photosUrls
}

export const getAllImages = async (email) => {
  try {
    const { data } = await userAPI.post('/images', { email: email })
    return data.images
  } catch (error) {
    console.log("Error al cargar las imagenes");
    return []
  }

}