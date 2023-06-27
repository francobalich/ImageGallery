import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { Gallery } from '../components/Gallery'

export const GalleryPage = () => {
  const {user}= useContext(UserContext)
  useEffect(() => {
    console.log(user);
  }, [])
  return (
    <>
    <Gallery />
    </>
  )
}
