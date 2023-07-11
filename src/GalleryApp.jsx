import './GalleryApp.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GalleryPage } from './pages/GalleryPage';
import { ImagePage } from './pages/ImagePage';
import { useAuthStore } from './hooks/useAuthStore';
import { useEffect } from 'react';

function GalleryApp() {
  const { status, checkData  } = useAuthStore()

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

export default GalleryApp
