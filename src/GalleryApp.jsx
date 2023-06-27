import './GalleryApp.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import { GalleryPage } from './pages/GalleryPage';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

function GalleryApp() {
  const { user } = useContext(UserContext)
  return (
    <Routes>
      {
        (user !== undefined) ?
          (
            <>
              <Route path='/*' element={<GalleryPage />} />
              <Route path='/' element={<GalleryPage />} />
            </>

          ) : (
            <>
              <Route path='/*' element={<LoginPage />} />
              <Route path='/auth/login' element={<LoginPage />} />
              <Route path='/auth/register' element={<RegisterPage />} />
            </>
          )
      }
    </Routes>
  )
}

export default GalleryApp
