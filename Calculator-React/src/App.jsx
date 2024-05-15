import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Basic from './pages/Basic'
import Advanced from './pages/Advanced'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Basic />} />
        <Route path='/Advanced' element={<Advanced />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
