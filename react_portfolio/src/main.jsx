import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { DarkLightMode } from './Components/ThemeToggle'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>

      <DarkLightMode>
        <App />

      </DarkLightMode>

    </BrowserRouter>

  </React.StrictMode>,
)
