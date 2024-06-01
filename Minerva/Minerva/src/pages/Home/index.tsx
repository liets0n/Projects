import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Wrapper, Content } from './styles'
import { getEmployees } from './../../services'
import { showPaymentStatus } from './../../utils'
import { RootState } from './../../context/store'
import { Menu, SideBar, AreaChart } from './../../components'
import { changeCurrentPage } from './../../context/sidebar.slice'

import { Person, CurrencyDollar } from '@phosphor-icons/react'

import AvatarDefault from './../../assets/illustrations/Avatar.png'

const Home = () => {
  const dispatch = useDispatch()

  const [employees, setEmployees] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const { userAccountData } = useSelector((state: RootState) => state.userAccount)

  const employeeList = employees.filter((item: any) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase()),
  )

  useEffect(() => {
    dispatch(changeCurrentPage('Dashboard'))

    getEmployees()
      .then((response: any) => setEmployees(response))
      .catch(_ => console.log('Erro ao obter os dados dos usuário no Dashboard.'))
  }, [])

  return (
    <Wrapper>
      <SideBar />

      <Content>
        <Menu />

        <main className='container'>
          <span className='container__welcome'>
            <h1 className='welcome__title'>
              Olá, {userAccountData?.name}
              <span className='title__emoji'>&#128075;&#127998;</span>
            </h1>

            <h2 className='welcome__subtitle'>Seja bem-vindo ao dashboard!</h2>
          </span>

          <div className='container__context'>
            <div className='context__top'>
              <div className='top__chart'>
                <span className='chart__top'>
                  <p className='top__title'>Gráfico Salarial</p>

                  <select name='year' id='year' defaultValue='Este Ano' className='chart__year'>
                    <option value='Este Ano'>Este Ano</option>
                    <option value='2022'>2022</option>
                  </select>
                </span>

                <AreaChart />
              </div>

              <div className='top__data'>
                <div className='data__container'>
                  <span className='container__title'>
                    <Person className='title__icon' />
                    <p className='title__text'>Total de funcionários</p>
                  </span>
                  <p className='container__value'>{employees?.length}</p>
                </div>

                <div className='data__container'>
                  <span className='container__title'>
                    <CurrencyDollar className='title__icon' />
                    <p className='title__text'>Total de funcionários pagos</p>
                  </span>
                  <p className='container__value'>3</p>
                </div>

                <div className='data__container'>
                  <span className='container__title'>
                    <CurrencyDollar className='title__icon' />
                    <p className='title__text'>Total de funcionários não pagos</p>
                  </span>
                  <p className='container__value'>4</p>
                </div>
              </div>
            </div>

            <table className='context__employees'>
              <thead>
                <tr className='employeesWrapper__column employeesWrapper__column--head'>
                  <th className='column__line column__line--1'>
                    <p className='line__text'>Funcionário</p>
                  </th>

                  <th className='column__line column__line--2'>
                    <p className='line__text'>Salário Base</p>
                  </th>

                  <th className='column__line column__line--3'>
                    <p className='line__text'>Contacto</p>
                  </th>

                  <th className='column__line column__line--4'>
                    <p className='line__text'>Contrato</p>
                  </th>

                  <th className='column__line column__line--5'>
                    <p className='line__text'>Estato</p>
                  </th>
                </tr>
              </thead>

              <tbody>
                {employeeList?.splice(0, 3).map((item: any) => (
                  <tr
                    key={item.id}
                    className='employeesWrapper__column employeesWrapper__column--employees'
                  >
                    <td className='column__line column__line--1'>
                      <img
                        src={item.avatar ? item.avatar.url : AvatarDefault}
                        alt='Avatar do funcionário'
                        className='line__avatar'
                      />

                      <span className='info'>
                        <p className='line__text'>{item.name.concat(' ', item.lastname)}</p>
                        <p className='line__text line__text--position'>{item.position}</p>
                      </span>
                    </td>

                    <td className='column__line column__line--2'>
                      <p className='line__text'>
                        {item.salary}
                      </p>
                    </td>

                    <td className='column__line column__line--3'>
                      <p className='line__text'>{item.contact}</p>
                    </td>

                    <td className='column__line column__line--4'>
                      <p className='line__text'>{item.contract}</p>
                    </td>

                    <td className='column__line column__line--5'>
                      {showPaymentStatus(item.lastpayroll)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </Content>
    </Wrapper>
  )
}

export default Home
