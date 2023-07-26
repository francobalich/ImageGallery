import PropTypes from 'prop-types'
// Componente para mostrar campos obligatorios en el formulario de inicio de sesión

export const InputLabel = ({ text, state }) => {
  return (
    <>
      <p className={`login__inputTitle ${(state) ? "red" : ""}`} ><span>*</span>{text}</p>
    </>
  )
}
InputLabel.propTypes={
  text:PropTypes.string.isRequired,
  state:PropTypes.bool.isRequired,
}