import { image } from "@cloudinary/url-gen/qualifiers/source"
import userAPI from "../api/userApi"
import { fileUpload } from "./fileUpload"

export const startUploadFiles = async (files = []) => {
  const fileUploadPromises = []

  for (const file of files) {
    fileUploadPromises.push(fileUpload(file))
  }
  const photosUrls = await Promise.all(fileUploadPromises)
  return photosUrls[0]
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
export const saveImages = async (email, title, path) => {
  try {
    const resp = await getAllImages(email)
    const newId = `${resp.length + 1}`;
    const images = [
      ...resp,
      {
        id: newId,
        src: path,
        alt: title,
      }
    ]
    const { data } = await userAPI.put('/images', { email: email, images: images })
    console.log(data);
    return data.images
  } catch (error) {
    console.log("Error al cargar las imagenes");
    return []
  }
}