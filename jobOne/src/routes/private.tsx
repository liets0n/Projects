import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { RootState } from '../redux/store'

interface PropTypes {
  children: React.ReactNode
}

const Private: React.FC<PropTypes> = ({ children }): any => {
  const { authenticated } = useSelector((state: RootState) => state.auth)

  if (!authenticated) {
    return <Navigate to="/entrar" />
  }

  return children
}

export default Private
