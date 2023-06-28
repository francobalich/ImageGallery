import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { Gallery } from '../components/Gallery'
import { Menu } from '../components/Menu'

export const ImagePage = () => {
  const {user}= useContext(UserContext)
  useEffect(() => {
    console.log(user);
  }, [])
  return (
    <>
    <Menu />
    {/* <Image image="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp" alt="imagende prueba" /> */}
    <h1>Hola mundo</h1>
    </>
  )
}
