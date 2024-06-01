import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Gauge, Gear, Person, Receipt, SignOut, Kanban, Question } from '@phosphor-icons/react'

import { Wrapper } from './styles'
import { RootState } from '../../context/store'
import { logout } from '../../context/userAccount.slice'

import AvatarDefault from './../../assets/illustrations/Avatar.png'

const SideBar = () => {
  const dispatch = useDispatch()
  const { currentPage } = useSelector((state: RootState) => state.sidebar)
  const { userAccountData } = useSelector((state: RootState) => state.userAccount)

  const userFullName = userAccountData?.name.concat(' ', userAccountData?.lastname)

  return (
    <Wrapper>
      <ul className='navigation navigation--top'>
        <div className='navigation--geral'>
          <h2 className='navigation__item--label'>GERAL</h2>

          <Link to='/'>
            <li
              className={
                currentPage === 'Dashboard'
                  ? 'navigation__item navigation__item--selected'
                  : 'navigation__item'
              }
            >
              <Gauge className='item__icon' />
              <p className='item__text'>Dashboard</p>
            </li>
          </Link>

          <Link to='/processamento/funcionarios'>
            <li
              className={
                currentPage === 'Processamento'
                  ? 'navigation__item navigation__item--selected'
                  : 'navigation__item'
              }
            >
              <Kanban className='item__icon' />
              <p className='item__text'>Folha de salário</p>
            </li>
          </Link>

          <Link to='/funcionarios'>
            <li
              className={
                currentPage === 'Funcionários'
                  ? 'navigation__item navigation__item--selected'
                  : 'navigation__item'
              }
            >
              <Person className='item__icon' />
              <p className='item__text'>Funcionários</p>
            </li>
          </Link>

          <Link to='/relatorio'>
            <li
              className={
                currentPage === 'report'
                  ? 'navigation__item navigation__item--selected'
                  : 'navigation__item'
              }
            >
              <Receipt className='item__icon' />
              <p className='item__text'>Relatório</p>
            </li>
          </Link>
        </div>

        <div className='navigation--support'>
          <h2 className='navigation__item--label'>SUPORTE</h2>

          <Link to='/ajuda'>
            <li
              className={
                currentPage === 'help'
                  ? 'navigation__item navigation__item--selected'
                  : 'navigation__item'
              }
            >
              <Question className='item__icon' />
              <p className='item__text'>Ajuda</p>
            </li>
          </Link>

          <Link to='/definicao'>
            <li
              className={
                currentPage === 'Definição'
                  ? 'navigation__item navigation__item--selected'
                  : 'navigation__item'
              }
            >
              <Gear className='item__icon' />
              <p className='item__text'>Definição</p>
            </li>
          </Link>
        </div>
      </ul>

      <ul className='navigation--bottom'>
        <div className='context__leftSide'>
          <img
            src={userAccountData?.avatar === false ? AvatarDefault : userAccountData?.avatar}
            alt='Avatar do usuário'
            className='leftSide__avatar'
          />

          <div className='leftSide__data'>
            <p className='data__name'>
              {userFullName.length >= 13 ? userFullName.slice(0, 13).concat('...') : userFullName}
            </p>
            <p className='data__charge'>
              {userAccountData?.position === 'Administrador Geral'
                ? 'Administrador'
                : userAccountData?.position === 'Chefe Dos Recursos Humanos'
                ? 'Chefe do RH'
                : 'Técnico do RH'}
            </p>
          </div>
        </div>

        <Link
          to='/entrar'
          className='context__rightSide'
          title='Sair da sua conta'
          onClick={() => dispatch(logout())}
        >
          <SignOut className='rightSide__icon' />
        </Link>
      </ul>
    </Wrapper>
  )
}

export default SideBar
