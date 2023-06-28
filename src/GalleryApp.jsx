import './GalleryApp.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GalleryPage } from './pages/GalleryPage';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

function GalleryApp() {
  const { user } = useContext(UserContext)
  return (
    <Routes>
      {
        // Renderizado condicional, si el usuario se autentico
        (user !== undefined) ?
          (
            // Rutas visibles (Autenticado)
            <>
              <Route path='/' element={<GalleryPage />} />
              <Route path='/*' element={<Navigate to="/" />} />
            </>
          ) : (
            // Rutas visibles (No autenticado)
            <>
              <Route path='/auth/login' element={<LoginPage />} />
              <Route path='/auth/register' element={<RegisterPage />} />
              <Route path='/*' element={ <Navigate to="/auth/login" />} />
            </>
          )
      }
    </Routes>
  )
}

export default GalleryApp
