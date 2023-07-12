import { Link } from 'react-router-dom'
import React, { useContext, useState } from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBNavbarNav, MDBIcon, MDBCollapse } from 'mdb-react-ui-kit';
import { useAuthStore } from '../hooks/useAuthStore';

//TODO: Agregar cerrar sesión en clase 6
export const Menu = () => {
  const { user, startLogout } = useAuthStore()
  const [showNavSecond, setShowNavSecond] = useState(false);
  const onLogout = () => {
    startLogout()
  }
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Bienvenido, {user.name || "Amigo"}</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <Link className='menu__link' to='/'>
              Gallery
            </Link>
            <a className='menu__link menu__linkEnd' onClick={onLogout}>
              Cerrar Sesión
            </a>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}