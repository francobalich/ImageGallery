import { MDBInput, MDBCol, MDBRow, MDBBtn } from 'mdb-react-ui-kit';
import { useForm } from '../hooks/useForm'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const registerFormFields = {
  registerName: '',
  registerSurname: '',
  registerEmail: '',
  registerPassword: '',
  confirmPassword: ''
}

export const RegisterPage = () => {
  const { registerName, registerSurname, registerEmail, registerPassword, confirmPassword, onInputChange: onRegisterInputChange } = useForm(registerFormFields)
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const onSubmitRegister = (event) => {
    event.preventDefault()
    if(registerEmail ===""){
      Swal.fire({
        title: 'Error!',
        text: 'Tiene que ingresar su email',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return
    }
    if(registerPassword ===""){
      Swal.fire({
        title: 'Error!',
        text: 'Tiene que ingresar su contraseña',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return
    }
    if(registerPassword.length<5){
      Swal.fire({
        title: 'Error!',
        text: 'La contraseña tiene que tener como minimo 5 caracteres',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return
    }
    const data = {
      name: registerName,
      surname: registerSurname,
      email: registerEmail,
      password: registerPassword,
      confirmPassword: confirmPassword
    }
    setUser(data)
    navigate('/')
  }
  return (
    <section className='pageContainer__register mainPage'>
      <form className='registerForm' onSubmit={onSubmitRegister}>
        <MDBRow className='mb-4'>
          <MDBCol>
            <MDBInput
              id='form3Example1'
              label='Nombre'
              name='registerName'
              value={registerName}
              onChange={onRegisterInputChange}
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id='form3Example2'
              label='Apellido'
              name='registerSurname'
              value={registerSurname}
              onChange={onRegisterInputChange}
            />
          </MDBCol>
        </MDBRow>
        <MDBInput
          className='mb-4 fondoBlanco'
          type='email'
          id='form1Example1'
          label='Ingrese su mail'
          name='registerEmail'
          value={registerEmail}
          onChange={onRegisterInputChange}
        />
        <MDBInput
          className='mb-4 fondoBlanco'
          type='password'
          id='form1Example2'
          label='Ingrese su contraseña'
          name='registerPassword'
          value={registerPassword}
          onChange={onRegisterInputChange}
        />
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
