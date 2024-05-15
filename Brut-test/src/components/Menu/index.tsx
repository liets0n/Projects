import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { GoSearch } from 'react-icons/go'
import { RiApps2Line } from 'react-icons/ri'
import { TbVideoPlus } from 'react-icons/tb'
import { BiSolidMicrophone } from 'react-icons/bi'
import { IoMdNotificationsOutline } from 'react-icons/io'

import { Wrapper } from './styles'
import { type RootState } from '../../context/store'
import { toSearchFor } from '../../context/search.slice'
import { changeSignInState } from '../../context/signIn.slice'

const Menu = () => {
  const MockAuth = false

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { text } = useSelector((state: RootState) => state.search)

  const [searchField, setSearchField] = useState(text)

  const search = () => {
    dispatch(toSearchFor(searchField))
    navigate('/search')
  }

  return (
    <Wrapper>
      <div className='hidden' />

      <div className='container'>
        <div className='container__searchField'>
          <input
            type='text'
            name='search'
            id='search'
            placeholder='Pesquisa'
            min={1}
            max={255}
            className='searchField__input'
            value={searchField}
            onChange={e => {
              setSearchField(e.target.value)
            }}
          />

          <button
            type='button'
            className='searchField__button'
            onClick={() => {
              search()
            }}
          >
            <GoSearch title='Pesquisar' className='button__icon' />
          </button>
        </div>

        <span className='container__icon' title='Pesquisar por voz'>
          <BiSolidMicrophone className='icon__canvas' />
        </span>
      </div>

      {MockAuth ? (
        <ul className='list'>
          <li className='list__item'>
            <TbVideoPlus title='Adicionar vídeos' className='item__icon' />
          </li>

          <li className='list__item'>
            <RiApps2Line
              title='Outras funcionalidades'
              className='item__icon'
            />
          </li>

          <li className='list__item'>
            <IoMdNotificationsOutline
              title='Notificações'
              className='item__icon'
            />
          </li>

          <li className='list__item'>
            <img
              src='https://avatars.githubusercontent.com/u/66736104?v=4'
              alt='Avatar do usuário '
              className='item__avatar'
            />
          </li>
        </ul>
      ) : (
        <div className='btnContainer'>
          <button
            type='button'
            className='btnContainer__btn btnContainer__btn--signin'
            onClick={() => dispatch(changeSignInState())}
          >
            Entrar
          </button>

          <button
            type='button'
            className='btnContainer__btn btnContainer__btn--signup'
          >
            Cadastro
          </button>
        </div>
      )}
    </Wrapper>
  )
}

export default Menu
