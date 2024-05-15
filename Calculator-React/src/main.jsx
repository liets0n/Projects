import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import App from './App'
import Theme from './styles/Theme'
import GlobalStyle from './styles/Global'
import 'react-toastify/dist/ReactToastify.min.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
      <GlobalStyle />
      <ToastContainer/>
    </ThemeProvider>
  </React.StrictMode>
)
