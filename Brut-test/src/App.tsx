import { ThemeProvider } from 'styled-components'
import { SkeletonTheme } from 'react-loading-skeleton'

import Routes from './routes'
import Global from './styles/global'
import { light } from './styles/themes'

import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  return (
    <ThemeProvider theme={light}>
      <SkeletonTheme baseColor=' #eeeeee' highlightColor='#ffffff'>
        <Global />
        <Routes />
      </SkeletonTheme>
    </ThemeProvider>
  )
}

export default App
