import React, { useEffect } from 'react'
import { Gallery } from '../components/Gallery'
import { Menu } from '../components/Menu'

export const GalleryPage = () => {

  useEffect(() => {
    console.log('');
  }, [])
  return (
    <>
    <Menu />
    <Gallery />
    </>
  )
}
