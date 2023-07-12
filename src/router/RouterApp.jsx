import { useEffect } from 'react'
import { useAuthStore } from '../hooks/useAuthStore'
import { Navigate, Route, Routes } from 'react-router-dom'
import { GalleryPage, ImagePage, LoginPage, RegisterPage } from '../pages'

export const RouterApp = () => {
  const { status, checkData } = useAuthStore()

  useEffect(() => {
    checkData()
  }, [])
  return (
    <Routes>
      {
        // Renderizado condicional, si el usuario se autentico
        (status === 'not-authenticated') ?
          (
            // Rutas visibles (No autenticado)
            <>
              <Route path='/auth/login' element={<LoginPage />} />
              <Route path='/auth/register' element={<RegisterPage />} />
              <Route path='/*' element={<Navigate to="/auth/login" />} />
            </>
          ) : (
            // Rutas visibles (Autenticado)
            <>
              <Route path='/' element={<GalleryPage />} />
              <Route path='/image/:id' element={<ImagePage />} />
              <Route path='/*' element={<Navigate to="/" />} />
            </>
          )
      }
    </Routes>
  )
}
