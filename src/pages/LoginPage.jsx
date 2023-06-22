import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

export const LoginPage = () => {
  return (
    <section className='pageContainer__login mainPage'>
      <form className='loginForm'>
        <MDBInput className='mb-4 fondoBlanco' type='email' id='form1Example1' label='Ingrese su mail' />
        <MDBInput className='mb-4 fondoBlanco' type='password' id='form1Example2' label='Ingrese su contraseña' />
        <MDBBtn type='submit' block>
          Iniciar Sesión
        </MDBBtn>
      </form>
    </section>
  )
}
