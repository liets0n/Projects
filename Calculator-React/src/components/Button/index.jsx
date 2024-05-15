import React from 'react'

import { Wrapper } from './styles'

const Button = ({ value, type, textButton, funcUpdate }) => {
  return (
    <Wrapper>
      <button
        type="button"
        className={`btn--digit ${type}`}
        id={`${type}${value}`}
        name={`button ${value}`}
        title={`Button ${value}`}
        onClick={() => funcUpdate(value)}
      >
        {textButton ?? value}
      </button>
    </Wrapper>
  )
}

export default Button
