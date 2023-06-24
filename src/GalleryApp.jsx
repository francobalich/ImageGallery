import './GalleryApp.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Gallery } from './components/Gallery';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

function GalleryApp() {
  return (
    <>
      <Gallery />
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
    </>
  )
}

export default GalleryApp
