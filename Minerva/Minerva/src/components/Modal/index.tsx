import React from 'react'

import { Wrapper } from './styles'

type PropType = {
  children: React.ReactNode
}

const Modal = ({ children }: PropType) => {
  return (
    <Wrapper>
      <div className='content'>{children}</div>
    </Wrapper>
  )
}

export default Modal
