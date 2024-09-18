import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/riversidedm-website-js">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)