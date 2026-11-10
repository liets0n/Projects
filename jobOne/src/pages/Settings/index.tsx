import React from 'react'

import { Wrapper, SideBar } from './styles'

import Avatar from './../../assets/illustrations/user_boy.png'

import { Menu } from '../../components'

const Settings: React.FC = () => {
  return (
    <>
      <Menu />

      <Wrapper>
        <SideBar>
          <div className="useAccount">
            <img src={Avatar} alt="Avatar" className="useAccount__avatar" />

            <p className="useAccount__email">lietsondossanto@gmail.com</p>
            <p className="useAccount__name">Lietson Dos Santos</p>
          </div>
        </SideBar>
      </Wrapper>
    </>
  )
}

export default Settings
