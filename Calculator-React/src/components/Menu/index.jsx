import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Wrapper } from './styles'

const Menu = () => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <nav className='menu'>
        <ul className='menu__list'>
          <li className='list__item' onClick={() => navigate('/')}>Basic</li>
          <li className='list__item' onClick={() => navigate('/advanced')}>advanced</li>
        </ul>
      </nav>
    </Wrapper>
  )
}

export default Menu
