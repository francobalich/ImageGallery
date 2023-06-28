import { MDBInput, MDBBtn } from 'mdb-react-ui-kit'
import { useForm } from '../hooks/useForm'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const loginFormFields = {
  loginEmail: '',
  loginPassword: ''
}

export const LoginPage = () => {
  const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormFields)
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const loginSubmit = (event) => {
    event.preventDefault()
    // Comprobar que si falta un dato no se envie
    if(loginEmail ===""){
      Swal.fire({
        title: 'Error!',
        text: 'Tiene que ingresar su email',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return
    }
    if(loginPassword ===""){
      Swal.fire({
        title: 'Error!',
        text: 'Tiene que ingresar su contraseña',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return
    }
    if(loginPassword.length<5){
      Swal.fire({
        title: 'Error!',
        text: 'La contraseña tiene que tener como minimo 5 caracteres',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return
    }

    const data = {
      email: loginEmail,
      password: loginPassword
    }
    setUser(data)
    navigate('/')
  }
  return (
    <section className='pageContainer__login mainPage'>
      <form className='loginForm' onSubmit={loginSubmit}>
        <MDBInput
          className='mb-4 fondoBlanco'
          type='email'
          id='form1Example1'
          label='Ingrese su mail'
          name='loginEmail'
          value={loginEmail}
          onChange={onLoginInputChange}
        />
        <MDBInput
          className='mb-4 fondoBlanco'
          type='password'
          id='form1Example2'
          label='Ingrese su contraseña'
          name='loginPassword'
          value={loginPassword}
          onChange={onLoginInputChange}
        />
        <MDBBtn type='submit' block>
          Iniciar Sesión
        </MDBBtn>
      </form>
    </section>
  )
}
