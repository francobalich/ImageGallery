import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useForm } from '../hooks/useForm';

const loginFormFields = {
  loginEmail: '',
  loginPassword: ''
}

export const LoginPage = () => {
  const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormFields)
  const loginSubmit = (event) => {
    event.preventDefault()
    console.log({
        email: loginEmail,
        password: loginPassword
    })
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
