import './GalleryApp.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Gallery } from './components/Gallery';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { Route, Routes } from 'react-router-dom';

function GalleryApp() {
  return (
    <Routes>
      <Route path='/' element={ <Gallery /> } />
      <Route path='/auth/login' element={ <LoginPage /> } />
      <Route path='/auth/register' element={ <RegisterPage /> } />
      <Route path='/*' element={ <LoginPage /> } />
    </Routes>
  )
}

export default GalleryApp
