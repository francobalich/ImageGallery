import React from 'react'
import ReactDOM from 'react-dom/client'
import GalleryApp from './GalleryApp.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <GalleryApp />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
)
