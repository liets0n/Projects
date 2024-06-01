import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './../pages/Home'
import Help from './../pages/Help'
import Report from './../pages/Report'
import SignIn from './../pages/SignIn'
import SignUp from './../pages/SignUp'
import Payroll from './../pages/Payroll'
import Settings from './../pages/Settings'
import Employees from './../pages/Employees'
import RegisterEmployee from './../pages/RegisterEmployee'
import RedefinePassword from './../pages/RedefinePassword'
import PayrollEmployees from './../pages/PayrollEmployees'

import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<Home />} />
          <Route path='/ajuda' element={<Help />} />
          <Route path='/relatorio' element={<Report />} />
          <Route path='/definicao' element={<Settings />} />
          <Route path='/funcionarios' element={<Employees />} />
          <Route path='/processamento/pagamentos' element={<Payroll />} />
          <Route path='/funcionarios/registrar' element={<RegisterEmployee />} />
          <Route path='/processamento/funcionarios' element={<PayrollEmployees />} />
        </Route>

        <Route element={<PublicRoutes />}>
          <Route path='/entrar' element={<SignIn />} />
          <Route path='/cadastro' element={<SignUp />} />
          <Route path='/redefinir/senha' element={<RedefinePassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
