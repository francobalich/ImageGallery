import './GalleryApp.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Gallery } from './components/Gallery';
import { Gallery2 } from './components/Gallery2';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

function GalleryApp() {
  return (
    <>
      <Gallery2 />
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
    </>
  )
}

export default GalleryApp
