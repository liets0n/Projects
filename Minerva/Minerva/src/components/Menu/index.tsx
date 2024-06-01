import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { MoonStars, Translate } from '@phosphor-icons/react'

import { Wrapper } from './styles'
import { RootState } from './../../context/store'
import { changeTheme } from './../../context/theme.slice'

import Logo from './../../../public/logo.svg'
import AvatarDefault from './../../assets/illustrations/Avatar.png'

const Menu = () => {
  const dispatch = useDispatch()
  const { currentTheme } = useSelector((state: RootState) => state.theme)
  const { userAccountData } = useSelector((state: RootState) => state.userAccount)

  const handçeChangeTheme = () => {
    if (currentTheme === 'light') {
      dispatch(changeTheme('dark'))
    } else {
      dispatch(changeTheme('light'))
    }
  }

  return (
    <Wrapper>
      <img alt='Logotipo oficial da aplicação' src={Logo} className='logo' />

      <ul className='menu'>
        <li className='menu__item' title='Traduzir a página'>
          <Translate className='item__icon' />
        </li>

        <li className='menu__item' title='Trocar de tema' onClick={() => handçeChangeTheme()}>
          <MoonStars className='item__icon' />
        </li>

        <li className='menu__item--avatar'>
          <img
            src={userAccountData?.avatar === false ? AvatarDefault : userAccountData?.avatar}
            alt='Avatar do usuário'
            className='item__avatar'
          />
        </li>
      </ul>
    </Wrapper>
  )
}

export default Menu
