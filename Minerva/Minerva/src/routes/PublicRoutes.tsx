import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

import { RootState } from './../context/store'

const PublicRoutes = () => {
  const { userAccountData } = useSelector((state: RootState) => state.userAccount)

  return !!userAccountData ? <Navigate to='/' /> : <Outlet />
}

export default PublicRoutes
