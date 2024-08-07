import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {NextUIProvider} from '@nextui-org/react'
import { Provider } from 'react-redux' 
import { createStore } from 'redux'
import { reducers } from './store/store.js'


const store = createStore(reducers)

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <NextUIProvider>
      <Provider store={store}>
      <BrowserRouter>
       <App/>
      </BrowserRouter>
      </Provider>
    </NextUIProvider>
   
  </React.StrictMode>,
)
