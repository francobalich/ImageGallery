import './GalleryApp.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Gallery } from './components/Gallery';
import { Gallery2 } from './components/Gallery2';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { GalleriaTest } from './components/GalleriaTest';
import { Gallery3 } from './components/Gallery3';

function GalleryApp() {
  return (
    <>
      {/* <Gallery2 /> */}
      <LoginPage />
      {/* <RegisterPage /> */}
      {/* <GalleriaTest /> */}
    </>
  )
}

export default GalleryApp
