import React, { useEffect, useState } from 'react'
import { DateTime } from 'luxon'
import { useDispatch } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import { useNavigate } from 'react-router-dom'

import { MagnifyingGlass } from '@phosphor-icons/react'

import { Wrapper, Content } from './styles'
import { getEmployees } from './../../services'
import { Menu, SideBar, Pagination, PayrollSkeleton } from './../../components'
import { changeCurrentPage } from './../../context/sidebar.slice'

import AvatarDefault from './../../assets/illustrations/Avatar.png'

const Payroll = () => {
  const date = DateTime.local()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [offset, setOffset] = useState(0)
  const [employees, setEmployees] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const employeeList = employees.filter((item: any) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase()),
  )

  const getTotalGossSalary = () => {
    let total = 0

    employees.map((item: any) => {
      total = total + Number(item.salary.toString().replace('.', '').replace(',', '.'))
    })

    return total
  }

  useEffect(() => {
    dispatch(changeCurrentPage('Processamento'))

    getEmployees()
      .then((response: any) => setEmployees(response))
      .catch(_ => console.log('Erro ao obter os dados dos usuário no Payroll.'))
  }, [])

  return (
    <Wrapper>
      <SideBar />

      <Content>
        <Menu />

        <main>
          <div className='allDataOfPayroll'>
            {employeeList?.length === 0 ? (
              <span className='allDataOfPayroll__context'>
                <p className='context__title'>
                  <Skeleton count={1} width={90} height={15} />
                </p>
                <p className='context__value'>
                  <Skeleton count={1} width={192} height={20} />
                </p>
              </span>
            ) : (
              <span className='allDataOfPayroll__context'>
                <p className='context__title'>Total</p>
                <p className='context__value'>
                  2.422.000,00
                </p>
              </span>
            )}

            {employeeList?.length === 0 ? (
              <span className='allDataOfPayroll__context'>
                <p className='context__title'>
                  <Skeleton count={1} width={170} height={15} />
                </p>
                <p className='context__value'>
                  <Skeleton count={1} width={192} height={20} />
                </p>
              </span>
            ) : (
              <span className='allDataOfPayroll__context'>
                <p className='context__title'>Subsídios</p>
                <p className='context__value'>
                  2.422.000,00
                </p>
              </span>
            )}

            {employeeList?.length === 0 ? (
              <span className='allDataOfPayroll__context'>
                <p className='context__title'>
                  <Skeleton count={1} width={110} height={15} />
                </p>
                <p className='context__value'>
                  <Skeleton count={1} width={192} height={20} />
                </p>
              </span>
            ) : (
              <span className='allDataOfPayroll__context'>
                <p className='context__title'>Data</p>
                <p className='context__value'>{date.toLocaleString(DateTime.DATE_HUGE)}</p>
              </span>
            )}
          </div>

          <div className='control'>
            <div className='control__leftSide'>
              <div className='leftSide__searchField'>
                <span className='searchField__icon' title='Pesquisar'>
                  <MagnifyingGlass className='icon__canva' />
                </span>

                <input
                  type='search'
                  name='searchField'
                  id='searchField'
                  className='searchField__input'
                  placeholder='Procure pelo nome'
                  value={searchValue}
                  onChange={event => setSearchValue(event.target.value)}
                />
              </div>

              <select
                name='contractType'
                id='contractType'
                className='leftSide__contractType'
                onChange={event => setSearchValue(event.target.value)}
              >
                <option value='' disabled selected>
                  Cargo
                </option>

                <option value='Estágio'>Estágio</option>
                <option value='Experiência'>Experiência</option>
                <option value='Intermitente'>Intermitente</option>
                <option value='Teletrabalho'>Teletrabalho</option>
                <option value='Trabalho eventual'>Trabalho eventual</option>
                <option value='Trabalho autônomo'>Trabalho autônomo</option>
                <option value='Tempo determinado'>Tempo determinado</option>
                <option value='Tempo indeterminado'>Tempo indeterminado</option>
              </select>
            </div>

            <div className='control__buttons'>
              <button
                type='button'
                className='buttons__element'
                onClick={() => navigate('/processamento/funcionarios')}
              >
                Concluir
              </button>

              <button
                type='button'
                className='buttons__element'
                title='Imprimir a folha de salário no formato PDF'
              >
                Imprimir
              </button>
            </div>
          </div>

          <p className='employeesCounter'>
            {employeeList?.length === 1
              ? `Total ${employeeList?.length || 0} funcionário cadastrado`
              : `Total ${employeeList?.length || 0} funcionários cadastrados`}
          </p>

          <table className='employeesWrapper'>
            <thead>
              <tr className='employeesWrapper__column employeesWrapper__column--head'>
                <th className='column__line column__line--1'>
                  <p className='line__text'>Funcionário</p>
                </th>

                <th className='column__line column__line--2'>
                  <p className='line__text'>Salário Base</p>
                </th>

                <th className='column__line column__line--3'>
                  <p className='line__text'>Subsídios</p>
                </th>

                <th className='column__line column__line--4'>
                  <p className='line__text'>Salário liquido</p>
                </th>

                <th className='column__line column__line--5'>
                  <p className='line__text'>Impostos</p>
                </th>

                <th className='column__line column__line--6'>
                  <p className='line__text'>Total de desconto</p>
                </th>

                <th className='column__line column__line--7'>
                  <p className='line__text'>Subtotal</p>
                </th>
              </tr>
            </thead>

            {employeeList?.length === 0 ? (
              <tbody>
                <PayrollSkeleton count={5} />
              </tbody>
            ) : (
              <tbody>
                {employeeList?.slice(offset, offset === 0 ? 5 : offset * 2).map((item: any) => (
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
                      <p className='line__text'>{item.salary}</p>
                    </td>

                    <td className='column__line column__line--3'>
                      <p className='line__text'>{item.salary}</p>
                    </td>

                    <td className='column__line column__line--4'>
                      <p className='line__text'>{item.salary}</p>
                    </td>

                    <td className='column__line column__line--5'>{item.salary}</td>

                    <td className='column__line column__line--6'>{item.salary}</td>

                    <td className='column__line column__line--7'>{item.salary}</td>
                  </tr>
                ))}

                <tr className='employeesWrapper__column employeesWrapper__column--total'>
                  <td className='column__line column__line--1'>
                    <p className='line__text'>Total</p>
                  </td>

                  <td className='column__line column__line--2'>
                    <p className='line__text'>
                      {getTotalGossSalary()}
                    </p>
                  </td>

                  <td className='column__line column__line--3'>
                    <p className='line__text'>
                      2.422.000,00
                    </p>
                  </td>

                  <td className='column__line column__line--4'>
                    <p className='line__text'>
                      2.422.000,00
                    </p>
                  </td>

                  <td className='column__line column__line--5'>
                    2.422.000,00
                  </td>

                  <td className='column__line column__line--6'>
                    2.422.000,00
                  </td>

                  <td className='column__line column__line--7'>
                    2.422.000,00
                  </td>
                </tr>
              </tbody>
            )}
          </table>

          <div className='footer'>
            <Pagination
              limit={5}
              total={employeeList?.length}
              offset={offset}
              setOffset={setOffset}
            />

            {employeeList?.length === 0 ? (
              <div className='footer__amount'>
                <p className='amount__value'>
                  <Skeleton count={1} width={192} height={20} />
                </p>

                <p className='amount__text'>
                  <Skeleton count={1} width={110} height={15} />
                </p>
              </div>
            ) : (
              <div className='footer__amount'>
                <p className='amount__value'>
                  2.422.000,00
                </p>

                <p className='amount__text'>Folha de pagamento total</p>
              </div>
            )}
          </div>
        </main>
      </Content>
    </Wrapper>
  )
}

export default Payroll
