import { Link } from 'react-router-dom'

import {
  MdOutlineExplore,
  MdOutlineFeedback,
  MdOutlineWatchLater,
} from 'react-icons/md'
import { GoHome } from 'react-icons/go'
import { LuLibrary } from 'react-icons/lu'
import { VscHistory } from 'react-icons/vsc'
import { FiHelpCircle } from 'react-icons/fi'
import { BsBalloonHeart } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoSettingsOutline } from 'react-icons/io5'
import { AiOutlinePlayCircle } from 'react-icons/ai'

import { Wrapper } from './styles'

import YouTubeBlack from '../../assets/images/logo/YouTube-black.svg'

const SideBar = () => {
  return (
    <Wrapper>
      <header className='top'>
        <RxHamburgerMenu alt='Menu' title='Menu' className='top__menu' />

        <Link to='/'>
          <img
            src={YouTubeBlack}
            alt='Youtube'
            title='Logo do youtube'
            className='top__logo'
          />
        </Link>
      </header>

      <nav className='navigation'>
        <ul className='navigation__list'>
          <li className='list__item list__item--activated'>
            <GoHome className='item__icon' />
            <p className='item__text'>Início</p>
          </li>

          <li className='list__item'>
            <MdOutlineExplore className='item__icon' />
            <p className='item__text'>Explore</p>
          </li>

          <li className='list__item'>
            <AiOutlinePlayCircle className='item__icon' />
            <p className='item__text'>Subscrições</p>
          </li>
        </ul>

        <ul className='navigation__list'>
          <li className='list__item'>
            <LuLibrary className='item__icon' />
            <p className='item__text'>Biblioteca</p>
          </li>

          <li className='list__item'>
            <VscHistory className='item__icon' />
            <p className='item__text'>Histórico</p>
          </li>

          <li className='list__item'>
            <MdOutlineWatchLater className='item__icon' />
            <p className='item__text'>Ver mais tarde</p>
          </li>

          <li className='list__item'>
            <BsBalloonHeart className='item__icon' />
            <p className='item__text'>Videos curtidos</p>
          </li>
        </ul>

        <ul className='navigation__list'>
          <h2 className='list__title'>Outras</h2>

          <li className='list__item'>
            <IoSettingsOutline className='item__icon' />
            <p className='item__text'>Definições</p>
          </li>

          <li className='list__item'>
            <FiHelpCircle className='item__icon' />
            <p className='item__text'>Central de ajuda</p>
          </li>

          <li className='list__item'>
            <MdOutlineFeedback className='item__icon' />
            <p className='item__text'>Enviar feedback</p>
          </li>
        </ul>
      </nav>
    </Wrapper>
  )
}

export default SideBar
