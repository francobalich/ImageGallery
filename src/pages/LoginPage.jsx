import { MDBInput, MDBBtn } from 'mdb-react-ui-kit'
import { useForm } from '../hooks/useForm'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { InputLabel } from '../components/InputLabel'
import { useAuthStore } from '../hooks/useAuthStore'

const loginFormFields = {
  loginEmail: '',
  loginPassword: ''
}

export const LoginPage = () => {
  const { startLogin } = useAuthStore()
  const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormFields)
  const [invalidForm, setInvalidForm] = useState({
    invalidMail: false,
    invalidPws: false
  })
  const navigate = useNavigate()

  const loginSubmit = (event) => {
    event.preventDefault()
    // Comprobar que si falta un dato no se envie
    if (loginEmail === "") {
      setInvalidForm({
        invalidMail: true ,
        invalidPws: false
      })
      return
    }
    if (loginPassword === "") {
      setInvalidForm({
        invalidMail: false,
        invalidPws: true
      })
      return
    }
    if (loginPassword.length < 5) {
      Swal.fire({
        title: 'Error!',
        text: 'La contraseña tiene que tener como minimo 5 caracteres',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return
    }

    //setUser(data)
    startLogin({
      email: loginEmail,
      password: loginPassword
  })
    navigate('/')
  }
  return (
    <section className='pageContainer__login mainPage'>
      <form className='loginForm' onSubmit={loginSubmit}>
      <InputLabel text="Nombre de usuario" state={invalidForm.invalidMail} />
        <MDBInput
          className='mb-4 fondoBlanco'
          type='email'
          id='form1Example1'
          label='Ingrese su mail'
          name='loginEmail'
          value={loginEmail}
          onChange={onLoginInputChange}
        />
        <InputLabel text="Contraseña" state={invalidForm.invalidPws} />
        <MDBInput
          className='mb-4 fondoBlanco'
          type='password'
          id='form1Example2'
          label='Ingrese su contraseña'
          name='loginPassword'
          value={loginPassword}
          onChange={onLoginInputChange}
        />
        <p className='login__inputText'>(<span>*</span>) Los puntos son obligatorios</p>
        <MDBBtn type='submit' block>
          Iniciar Sesión
        </MDBBtn>
      </form>
    </section>
  )
}
