import React from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import './i18n'
import Routes from './routes'
import { RootState } from './redux/store'
import { GlobalStyles } from './styles/globalStyles'
import { LightTheme, DarkTheme } from './styles/theme'

import 'react-toastify/dist/ReactToastify.min.css'

const App: React.FC = () => {
  const { theme } = useSelector((state: RootState) => state.themes)
  const currentTheme = theme === 'light' ? LightTheme : DarkTheme

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Routes />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
