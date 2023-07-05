// Componente para mostrar campos obligatorios en el formulario de inicio de sesión
export const InputLabel = ({ text, state }) => {
  return (
    <>
      <p className={`login__inputTitle ${(state) ? "red" : ""}`} ><span>*</span>{text}</p>
    </>
  )
}
