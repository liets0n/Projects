import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Wrapper, Content } from './styles'
import { Menu, SideBar } from './../../components'
import { changeCurrentPage } from './../../context/sidebar.slice'

import { Person } from '@phosphor-icons/react'

const Report = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeCurrentPage('report'))
  }, [])

  return (
    <Wrapper>
      <SideBar />

      <Content>
        <Menu />

        <main className='container'>
          <h1>Relatório</h1>
          <h2></h2>
        </main>
      </Content>
    </Wrapper>
  )
}

export default Report
