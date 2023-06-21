import './GalleryApp.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Gallery } from './components/Gallery';
import { Gallery2 } from './components/Gallery2';
import { LoginPage } from './pages/LoginPage';

function GalleryApp() {
  return (
    <section className='mainPage'>
      {/* <Gallery2 /> */}
      <LoginPage />
    </section>
  )
}

export default GalleryApp
