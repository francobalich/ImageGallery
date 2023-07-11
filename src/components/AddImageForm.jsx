import { useEffect, useRef, useState } from 'react'
import { getAllImages, startUploadFiles } from '../utils/fileManager';
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
export const AddImageForm = ({status, setStatus}) => {
  const { user } = useAuthStore()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { imgDataTitle, imgDataTitleValid, onInputChange: onImgInputChange } = useForm(imgDataFormFields, formValidations)

  const onFileInputChange = async ({ target }) => {
    if (target.files === 0) return;

    const path = await startUploadFiles(target.files)
    console.log(path);
  };
  const onSubmitData = (event) => {
    event.preventDefault()
    setFormSubmitted(true)
    console.log("Se envio el form");
  }
  const onCancel = ()=>{
    setStatus(false)
  }
  useEffect(() => {
    getAllImages(user.email)
  }, [])

  const fileInputRef = useRef();
  return (
    (status)?(
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
            multiple
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
    ):
    <></>
  )
}
