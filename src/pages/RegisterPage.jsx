import { MDBInput, MDBCol, MDBRow, MDBBtn } from 'mdb-react-ui-kit';
import { useForm } from '../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useAuthStore } from '../hooks/useAuthStore';
import { ErrorLabel } from '../components/ErrorLabel';
import { useState } from 'react';

const registerFormFields = {
  registerName: '',
  registerSurname: '',
  registerEmail: '',
  registerPassword: '',
  confirmPassword: ''
}
const formValidations={
  registerName:[(value)=>value.length  >= 1, 'El nombre es obligatorio'],
  registerSurname:[(value)=>value.length  >= 1, 'El apellido es obligatorio'],
  registerEmail:[(value)=>value.includes('@'), 'El correo debe de tener un @'],
  registerPassword:[(value)=>value.length  >= 6, 'La contraseña debe de tener más de 6 letras'],
  confirmPassword:[(value)=>value.length  >= 6, 'La confirmación de la contraseña debe de tener más de 6 letras'],
}

export const RegisterPage = () => {
  const { startRegister ,errorMessage} = useAuthStore()
  const { registerName, registerSurname, registerEmail, registerPassword, confirmPassword, onInputChange: onRegisterInputChange, isFormValid, registerNameValid, registerSurnameValid, registerEmailValid, registerPasswordValid, confirmPasswordValid } = useForm(registerFormFields,formValidations)
  const navigate = useNavigate()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const onSubmitRegister = (event) => {
    event.preventDefault()
    setFormSubmitted(true)

    if(!isFormValid) return
    const data = {
      name: registerName,
      surname: registerSurname,
      email: registerEmail,
      password: registerPassword,
      confirmPassword: confirmPassword
    }
    //setUser(data)
    navigate('/')
  }
  return (
    <section className='pageContainer__register mainPage'>
      <form className='registerForm' onSubmit={onSubmitRegister}>
        <MDBRow className='mb-4'>
          <MDBCol>
          <ErrorLabel text={ registerNameValid } state={!!registerNameValid && formSubmitted} />
            <MDBInput
              id='form3Example1'
              label='Nombre'
              name='registerName'
              value={registerName}
              onChange={onRegisterInputChange}
            />
          </MDBCol>
          <MDBCol>
          <ErrorLabel text={ registerSurnameValid } state={!!registerSurnameValid && formSubmitted} />
            <MDBInput
              id='form3Example2'
              label='Apellido'
              name='registerSurname'
              value={registerSurname}
              onChange={onRegisterInputChange}
            />
          </MDBCol>
        </MDBRow>
        <ErrorLabel text={ registerEmailValid } state={!!registerEmailValid && formSubmitted} />
        <MDBInput
          className='mb-4 fondoBlanco'
          type='email'
          id='form1Example1'
          label='Ingrese su mail'
          name='registerEmail'
          value={registerEmail}
          onChange={onRegisterInputChange}
        />
        <ErrorLabel text={ registerPasswordValid } state={!!registerPasswordValid && formSubmitted} />
        <MDBInput
          className='mb-4 fondoBlanco'
          type='password'
          id='form1Example2'
          label='Ingrese su contraseña'
          name='registerPassword'
          value={registerPassword}
          onChange={onRegisterInputChange}
        />
        <ErrorLabel text={ confirmPasswordValid } state={!!confirmPasswordValid && formSubmitted} />
        <MDBInput
          className='mb-4 fondoBlanco'
          type='password'
          id='form1Example3'
          label='Confirme su contraseña'
          name='confirmPassword'
          value={confirmPassword}
          onChange={onRegisterInputChange}
        />
        
        <MDBBtn type='submit' className='mb-4' block>
          Registrarse
        </MDBBtn>

      </form>
    </section>
  )
}
