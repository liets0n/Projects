import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { BsChevronDown } from 'react-icons/bs'
import { MdOutlineBusinessCenter } from 'react-icons/md'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { HiOutlineViewGridAdd, HiOutlineDocumentText } from 'react-icons/hi'

import user_boy_pictor from './../../assets/illustrations/user_boy.png'

import { Wrapper } from './styles'
import { RootState } from '../../redux/store'
import { DropDownMenu } from '../index'

const Menu: React.FC = () => {
  const [openDropDown, setOpenDropDown] = useState<boolean>(false)
  const { t } = useTranslation()

  const { authenticated, userAccount } = useSelector(
    (state: RootState) => state.auth
  )

  return (
    <>
      {authenticated ? <DropDownMenu open={openDropDown} /> : null}

      <Wrapper>
        <nav className="menu">
          <h1 className="menu__title">
            <Link to="/" className="title__link">
              Joby1
            </Link>
          </h1>

          <ul className="menu__list">
            <Link to="/resumo" className="list__item list__item--bubble">
              <li className="item__link">
                <HiOutlineDocumentText className="link__icon" title="Resumo" />
                <p className="link__text">Resumo</p>
              </li>
            </Link>

            <Link
              to="/anunciar_vagas"
              className="list__item list__item--bubble"
            >
              <li className="item__link">
                <HiOutlineViewGridAdd
                  className="link__icon"
                  title="Anunciar vagas"
                />
                <p className="link__text">Anunciar</p>
              </li>
            </Link>

            <Link to="/vagas" className="list__item list__item--bubble">
              <li className="item__link">
                <MdOutlineBusinessCenter className="link__icon" title="Vagas" />
                <p className="link__text">Vagas</p>
              </li>
            </Link>

            <Link to="/notification" className="list__item list__item--bubble">
              <li className="item__link">
                <IoMdNotificationsOutline
                  className="link__icon"
                  title="Notificações"
                />
                <p className="link__text">Notificações</p>
              </li>
            </Link>

            <li
              className="list__item list__item--userPictor"
              onClick={() => setOpenDropDown(prevState => !prevState)}
            >
              {userAccount.pictor == null || userAccount.pictor === '' ? (
                <img
                  src={user_boy_pictor}
                  alt="Fotografia do usuário"
                  className="item__pictor"
                />
              ) : (
                <span className="item__pictorWrapper">
                  <img
                    src={userAccount.pictor}
                    alt="Fotografia do usuário"
                    className="pictorWrapper__pictor"
                  />
                </span>
              )}

              {openDropDown ? (
                <BsChevronDown
                  className="pictorWrapper__arrowDownIcon Arrow_down_icon--inverted"
                  name="Arrow_down_icon"
                />
              ) : (
                <BsChevronDown
                  className="pictorWrapper__arrowDownIcon"
                  name="Arrow_down_icon "
                />
              )}
            </li>
          </ul>
        </nav>
      </Wrapper>
    </>
  )
}

export default Menu
