import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { onAuthStateChanged } from 'firebase/auth'
import { SkeletonTheme } from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'

import Routes from './routes'
import { auth } from './lib/firebase'
import { RootState } from './context/store'
import { Light, Dark } from './styles/theme'
import getEmployees from './services/getEmployees'
import { GlobalStyles } from './styles/globalStyles'
import { saveUserAccountData } from './context/userAccount.slice'

import 'react-loading-skeleton/dist/skeleton.css'
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  const dispatch = useDispatch()
  const { currentTheme } = useSelector((state: RootState) => state.theme)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        getEmployees('users', user.uid)
          .then(response => {
            dispatch(saveUserAccountData(response))
          })
          .catch(error => console.log(error))
      } else {
        dispatch(saveUserAccountData(null))
      }
    })
  }, [])

  return (
    <ThemeProvider theme={currentTheme === 'light' ? Light : Dark}>
      <SkeletonTheme
        baseColor={currentTheme === 'light' ? '' : '#303030'}
        highlightColor={currentTheme === 'light' ? '' : '#444'}
      >
        <Routes />
        <GlobalStyles />
        <ToastContainer limit={3} />
      </SkeletonTheme>
    </ThemeProvider>
  )
}

export default App
