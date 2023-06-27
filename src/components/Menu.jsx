import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <header>
      <nav>
        <Link to='/'>Gallery</Link>
        <Link to='/auth/login'> Iniciar Sesión</Link>
        <Link to='/auth/register'>Registrarse</Link>
      </nav>
    </header>
  )
}
