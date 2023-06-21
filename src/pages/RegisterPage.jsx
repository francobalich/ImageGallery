import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

export const RegisterPage = () => {
  const onSubmitRegister=(event)=>{
    event.preventDefault()
    console.log("Esto es un submit");
  }
  return (
    <section className='pageContainer__register mainPage'>
      <form className='registerForm' onSubmit={onSubmitRegister}>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form3Example1' label='Nombre' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form3Example2' label='Apellido' />
        </MDBCol>
      </MDBRow>
      <MDBInput className='mb-4 fondoBlanco' type='email' id='form1Example1' label='Ingrese su mail' />
        <MDBInput className='mb-4 fondoBlanco' type='password' id='form1Example2' label='Ingrese su contraseña' />

      <MDBBtn type='submit' className='mb-4' block>
        Registrarse
      </MDBBtn>

    </form>
    </section>
  )
}
