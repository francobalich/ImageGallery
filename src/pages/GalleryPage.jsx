import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { Gallery } from '../components/Gallery'
import { Menu } from '../components/Menu'

export const GalleryPage = () => {
  const {user}= useContext(UserContext)
  useEffect(() => {
    console.log(user);
  }, [])
  return (
    <>
    <Menu />
    <Gallery />
    </>
  )
}
