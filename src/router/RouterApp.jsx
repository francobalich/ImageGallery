import { useEffect } from 'react'
import { useAuthStore } from '../hooks/useAuthStore'
import { Navigate, Route, Routes } from 'react-router-dom'
import { GalleryPage, ImagePage, LoginPage, RegisterPage } from '../pages'

export const RouterApp = () => {
  const { status, checkData } = useAuthStore()

  const renderizerPage = () => {
    // Renderizado condicional, si el usuario se autentico
    if (status === 'not-authenticated') {
      return (
        // Rutas visibles (No autenticado)
        <>
          <Route path='/auth/login' element={<LoginPage />} />
          <Route path='/auth/register' element={<RegisterPage />} />
          <Route path='/*' element={<Navigate to="/auth/login" />} />
        </>
      )
    }
    else if (status === 'authenticated') {
      return (
        // Rutas visibles (Autenticado)
        <>
          <Route path='/' element={<GalleryPage />} />
          <Route path='/image/:id' element={<ImagePage />} />
          <Route path='/*' element={<Navigate to="/" />} />
        </>
      )
    }
    else {
      return <>
      <Route path='/' element={<p>Cargando...</p>}/>
      </>
    }

  }
  useEffect(() => {
    checkData()
  }, [])
  return (
    <Routes>
      {renderizerPage()}
    </Routes>
  )
}
