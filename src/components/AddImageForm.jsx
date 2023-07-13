import { useRef, useState } from 'react'
import { useAuthStore } from '../hooks/useAuthStore';
import '../styles/AddImageForm.css'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { InputLabel } from './InputLabel';
import { useForm } from '../hooks/useForm';
import { useImageStore } from '../hooks/useImageStore';

// Objetos con información inicial
const imgDataFormFields = {
  imgDataTitle: ''
}
const formValidations = {
  imgDataTitle: [(value) => value.length >= 1, 'El titulo es obligatorio'],
}

// Componente funcional para el formulario que permite agregar mas imagenes.
export const AddImageForm = ({ status, setStatus }) => {
  const { user } = useAuthStore()
  const { getAllImages, saveImages, uploadFile } = useImageStore();
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [path, setPath] = useState("")
  const fileInputRef = useRef();

  const { imgDataTitle, imgDataTitleValid, onInputChange: onImgInputChange, onResetForm } = useForm(imgDataFormFields, formValidations)

  // Evento que sucede cuando el usuario carga una imagen por el input
  const onFileInputChange = async ({ target }) => {
    if (target.files === 0) return;
    setPath(target.files)
  }

  // Evento que sucede cuando el usuario envia el formulario
  const onSubmitData = async (event) => {
    event.preventDefault()
    setFormSubmitted(true)
    // Agregando un foreach se puede guardar varias imagenes
    const url = await uploadFile(path[0])
    const images = await getAllImages(user.email)
    setPath()

    setFormSubmitted(false)
    onResetForm()

    await saveImages(user.email, imgDataTitle, url)
    setStatus(false)
  }
  //Evento que sucede cuando el usuario hace clic en cancelar
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
          <p>{(path !== "") ? `Ya subio su imagen.` : ""}</p>
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
