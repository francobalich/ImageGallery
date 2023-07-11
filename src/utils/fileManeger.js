import { fileUpload } from "./fileUpload"

export const startUploadFiles = async (files = []) => {
  const fileUploadPromises = []

  for (const file of files) {
    fileUploadPromises.push(fileUpload(file))
  }
  const photosUrls = await Promise.all(fileUploadPromises)
  return photosUrls
}