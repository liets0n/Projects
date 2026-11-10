import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { RootState } from '../redux/store'

interface PropTypes {
  children: React.ReactNode
}

const Public: React.FC<PropTypes> = ({ children }): any => {
  const { authenticated } = useSelector((state: RootState) => state.auth)

  if (authenticated) {
    return <Navigate to="/vagas" />
  }

  return children
}

export default Public
