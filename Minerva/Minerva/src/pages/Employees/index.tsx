import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Eye, Plus, Trash, HandCoins, MagnifyingGlass } from '@phosphor-icons/react'

import { Wrapper, Content } from './styles'
import { showPaymentStatus } from './../../utils'
import { getEmployees, deleteEmployee } from './../../services'
import { changeCurrentPage } from './../../context/sidebar.slice'
import { Menu, SideBar, Modal, EmployeeSkeleton, Pagination, ModalEmployeeProfile } from './../../components'

import Avatar from './../../assets/illustrations/Avatar.png'

const EmployeesPage = () => {
  const [openModal, setOpenModal] = useState(false)
  const [openModalEmployeeProfile, setOpenModalEmployeeProfile] = useState(false)
  const [EmployeeProfileData, setEmployeeProfileData] = useState<any>(null)
  const [modalData, setModalData] = useState<any[]>([])
  const [employees, setEmployees] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [offset, setOffset] = useState(0)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const employeeList = employees.filter((item: any) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase()),
  )

  useEffect(() => {
    dispatch(changeCurrentPage('Funcionários'))

    getEmployees()
      .then((response: any) => setEmployees(response))
      .catch(_ => console.log('Erro ao obter os dados dos usuário no Employees.'))
  }, [])

  return (
    <Wrapper>
      <SideBar />

      {openModal && (
        <Modal>
          <h1 className='content__title'>Confirmar a exclusão</h1>
          <p className='content__description'>
            Tem certeza que gostaria de excluir este funcionário?
          </p>

          <div className='content__buttons'>
            <button
              className='buttons__element buttons__element--cancel'
              onClick={() => setOpenModal(state => !state)}
              title='Não excluir o funcionário'
            >
              Cancelar
            </button>

            <button
              className='buttons__element buttons__element--confirm'
              onClick={async () => {
                setOpenModal(state => !state)
                setEmployees(await deleteEmployee(modalData[0], modalData[1]))
              }}
              title='Excluir o funcionário'
            >
              Sim, excluir
            </button>
          </div>
        </Modal>
      )}

      {
        openModalEmployeeProfile && <ModalEmployeeProfile data={EmployeeProfileData} modalState={setOpenModalEmployeeProfile}/>
      }

      <Content>
        <Menu />

        <main>
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

            <button
              type='button'
              className='control__btn'
              onClick={() => navigate('/funcionarios/registrar')}
            >
              <Plus className='btn__icon' />
              Adicionar
            </button>
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
                  <p className='line__text'>Contacto</p>
                </th>

                <th className='column__line column__line--4'>
                  <p className='line__text'>Contrato</p>
                </th>

                <th className='column__line column__line--5'>
                  <p className='line__text'>Estato</p>
                </th>

                <th className='column__line column__line--6'>
                  <p className='line__text'>Gerir</p>
                </th>
              </tr>
            </thead>

            <tbody>
              {employeeList?.length === 0 ? (
                <EmployeeSkeleton count={5} />
              ) : (
                employeeList?.slice(offset, offset === 0 ? 5 : offset * 2).map((item: any) => (
                  <tr
                    key={item.id}
                    className='employeesWrapper__column employeesWrapper__column--employees'
                  >
                    <td className='column__line column__line--1'>
                      <img
                        src={item.avatar ? item.avatar.url : Avatar}
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

                    <td className='column__line column__line--6'>
                      <span
                        className='line__icon line__icon--subsidies'
                        title='Adicionar subsídios'
                      >
                        <HandCoins className='line__icon line__icon--subsidies' />
                      </span>

                      <span className='line__icon line__icon--trash' title='Excluir funcionário'>
                        <Trash
                          onClick={() => {
                            setOpenModal(state => !state)
                            setModalData([item.id, item.avatar])
                          }}
                        />
                      </span>

                      <span className='line__icon line__icon--show' title='Mais informações'>
                        <Eye
                          onClick={() => {
                            setEmployeeProfileData(item)
                            setOpenModalEmployeeProfile(state => !state)
                          }}
                        />
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <Pagination
            limit={5}
            total={employeeList?.length}
            offset={offset}
            setOffset={setOffset}
          />
        </main>
      </Content>
    </Wrapper>
  )
}

export default EmployeesPage
