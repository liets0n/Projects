import React from 'react'

import Banner from './../../assets/images/banner.png'
import Pictor from './../../assets/images/pictor1.jpg'

import { Wrapper } from './styles'
import { Menu } from '../../components'

const CreateVacancy: React.FC = () => {
  return (
    <>
      <Menu />

      <Wrapper>
        <div className="top">
          <img src={Banner} alt="banner" className="top__banner" />

          <div className="top__user">
            <img
              src={Pictor}
              alt="Fotografia do usuário"
              className="user__pictor"
            />

            <span className="user__name">
              <p className="name__user">Lietson Dos Santos</p>
              <p className="name__id">@lietsondossanto</p>
            </span>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default CreateVacancy
