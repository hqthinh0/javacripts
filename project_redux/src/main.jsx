import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './userReducer/Reducer.jsx'


import './index.css'
import App from './App.jsx'


const  store = configureStore({
  reducer:{
    users: UserReducer,
  }
})

// https://www.youtube.com/watch?v=DOkSU3yg4vQ
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
   <App />
   </Provider>
  </StrictMode>,
)
