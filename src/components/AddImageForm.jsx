import { useEffect, useRef, useState } from 'react'
import { getAllImages, saveImages, uploadFile } from '../utils/fileManager';
import { useAuthStore } from '../hooks/useAuthStore';
import '../styles/AddImageForm.css'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { InputLabel } from './InputLabel';
import { useForm } from '../hooks/useForm';

const imgDataFormFields = {
  imgDataTitle: ''
}
const formValidations = {
  imgDataTitle: [(value) => value.length >= 1, 'El titulo es obligatorio'],
}
export const AddImageForm = ({ status, setStatus, setImageList }) => {
  const { user } = useAuthStore()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [path, setPath] = useState()
  const fileInputRef = useRef();

  const { imgDataTitle, imgDataTitleValid, onInputChange: onImgInputChange } = useForm(imgDataFormFields, formValidations)

  const onFileInputChange = async ({ target }) => {
    if (target.files === 0) return;
    setPath(target.files)
  }

  const onSubmitData = async(event) => {
    event.preventDefault()
    setFormSubmitted(true)
    const url = await uploadFile(path[0])
    const images=await getAllImages(user.email)
    setImageList(images)
    setStatus(false)
    saveImages(user.email,imgDataTitle,url)
  }

  const onCancel = () => {
    setStatus(false)
  }

  return (
    (status) ? (
      <section className='formAlert'>
        <form className='loginForm' onSubmit={onSubmitData}>
          <InputLabel text="Ingrese el titulo de la imagen" state={!!imgDataTitleValid && formSubmitted} />
          <MDBInput
            className='mb-4 fondoBlanco'
            type='text'
            label='Ingrese el titulo de la imagen'
            name='imgDataTitle'
            value={imgDataTitle}
            onChange={onImgInputChange}
          />
          <div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={onFileInputChange}
              style={{ display: "none" }}
            />
            <MDBBtn type='button'
              className='mb-4'
              onClick={() => {
                fileInputRef.current.click();
              }}
              block>
              Haga clic aca para subir una imagen
            </MDBBtn>
          </div>
          <MDBBtn type='submit' color='success' className='mb-4' block>
            Guardar Imagen
          </MDBBtn>
          <MDBBtn type='button' color='danger' className='mb-4' block onClick={onCancel}>
            Cerrar
          </MDBBtn>
        </form>
      </section>
    ) :
      <></>
  )
}
