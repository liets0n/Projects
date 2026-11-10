import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Wrapper } from './styles'
import { logout } from '../../redux/features/auth.slice'

interface PropType {
  open: boolean
}

const DropDownMenu: React.FC<PropType> = ({ open }) => {
  const dispatch = useDispatch()

  const handleLogout = (): void => {
    dispatch(logout())
  }

  return (
    <Wrapper open={open}>
      <nav className="dropdown">
        <ul className="dropdown__list">
          <Link to="/profile">
            <li className="list__item list__item--profile">
              <p className="item__text">Perfil</p>
            </li>
          </Link>

          <li className="list__item separator"></li>

          <Link to="/vacancies_salvas">
            <li className="list__item list__item--vacancies">
              <p className="item__text">Vagas Salvas</p>
            </li>
          </Link>

          <Link to="/feedback">
            <li className="list__item list__item--feedback">
              <p className="item__text">FeedBack</p>
            </li>
          </Link>

          <Link to="/settings">
            <li className="list__item list__item--settings">
              <p className="item__text">Definições</p>
            </li>
          </Link>

          <Link to="/">
            <li
              className="list__item list__item--signOut"
              onClick={() => handleLogout()}
            >
              <p className="item__text">Sair</p>
            </li>
          </Link>
        </ul>
      </nav>
    </Wrapper>
  )
}

export default DropDownMenu
