import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

import { RootState } from './../context/store'

const PrivateRoutes = () => {
  const { userAccountData } = useSelector((state: RootState) => state.userAccount)

  return !!userAccountData ? <Outlet /> : <Navigate to='/entrar' />
}

export default PrivateRoutes
