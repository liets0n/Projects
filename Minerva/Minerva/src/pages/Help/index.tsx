import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Wrapper, Content } from './styles'
import { Menu, SideBar } from './../../components'
import { changeCurrentPage } from './../../context/sidebar.slice'

import { Person } from '@phosphor-icons/react'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeCurrentPage('help'))
  }, [])

  return (
    <Wrapper>
      <SideBar />

      <Content>
        <Menu />

        <main className='container'>
          <h1>Encontrar suporte</h1>
          <h2></h2>
        </main>
      </Content>
    </Wrapper>
  )
}

export default Home
