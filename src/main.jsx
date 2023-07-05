import React from 'react'
import ReactDOM from 'react-dom/client'
import GalleryApp from './GalleryApp.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

// Es necesario agregar el <Provider></Provider> para indicar cual va a ser nuestro store en redux
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <GalleryApp />
        </BrowserRouter>
      </Provider>
  </React.StrictMode>,
)
