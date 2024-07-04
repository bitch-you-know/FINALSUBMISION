import React from 'react'
import {NextUIProvider} from '@nextui-org/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
       <App/>
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>,
)
