import React, { useState, useEffect } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { zodResolver } from '@hookform/resolvers/zod'

import { ArrowLeft } from '@phosphor-icons/react'

import { Wrapper, Content } from './styles'
import { selectAvatar } from './../../utils'
import { Menu, SideBar } from './../../components'
import { registerEmployee } from './../../services'
import { changeCurrentPage } from './../../context/sidebar.slice'
import { nameFormatter, numberAreIncluded } from './../../helpers'

import AvatarDefault from './../../assets/illustrations/Avatar.png'

const handleSubmitFormDataSchema = z.object({
  avatar: z.instanceof(FileList).transform(list => list.item(0)),
  name: z
    .string()
    .nonempty('Campo obrigatório')
    .min(3, 'No mínimo 3 caracteres')
    .transform(name => nameFormatter(name))
    .refine(name => numberAreIncluded(name), 'Informe apenas caracteres de a-Z'),
  lastname: z
    .string()
    .nonempty('Campo obrigatório')
    .min(3, 'No mínimo 3 caracteres')
    .transform(lastname => nameFormatter(lastname))
    .refine(lastname => numberAreIncluded(lastname), 'Informe apenas caracteres de a-Z'),
  salary: z
    .string()
    .min(5, 'O salário mínimo é de 32.181,15Kz')
    .regex(/^[1-9]\d{0,2}(\.\d{3})*(,\d{2})?$/, 'Valor monetário inválido'),
  contract: z.string().min(1, 'Campo obrigatório'),
  sector: z.string().min(1, 'Campo obrigatório'),
  position: z.string().min(1, 'Campo obrigatório'),
  email: z.string().nonempty('Campo obrigatório').email('E-mail inválido'),
  contact: z
    .string()
    .nonempty('Campo obrigatório')
    .min(9, 'No mínimo 9 números')
    .regex(/((^\(\+244\)\s9\d{2}\s\d{3}\s\d{3})|((^9\d{2}\s\d{3}\s\d{3})))/, 'Contacto inválido'),
})

type DataType = {
  avatar: any
  name: string
  email: string
  sector: string
  salary: string
  contact: string
  contract: string
  lastname: string
  position: string
}

type handleSubmitFormDataType = Zod.infer<typeof handleSubmitFormDataSchema>

const RegisterEmployeePage = () => {
  const [avatarState, setAvatarState] = useState<any>(false)

  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<handleSubmitFormDataType>({
    resolver: zodResolver(handleSubmitFormDataSchema),
  })

  const handleSubmitFormData = (data: DataType) => {
    registerEmployee(data, avatarState)
      .then(_ => reset())
      .catch(error => console.log(error))
  }

  useEffect(() => {
    dispatch(changeCurrentPage('Funcionários'))
  }, [])

  return (
    <Wrapper>
      <SideBar />

      <Content>
        <Menu />

        <main>
          <h1 className='title'>
            <ArrowLeft className='title__icon' onClick={() => history.back()} />
            Cadastro de funcionários
          </h1>

          <form onSubmit={handleSubmit(handleSubmitFormData)}>
            <div className='avatarContainer'>
              <img
                src={avatarState !== false ? avatarState : AvatarDefault}
                id='avatar'
                alt='Avatar do funcionário'
                className='avatarContainer__image'
              />

              <label htmlFor='inputUploat' className='avatarContainer__label'>
                Selecionar
              </label>

              <button
                type='button'
                className='avatarContainer__button'
                onClick={() => setAvatarState(false)}
              >
                Remover
              </button>

              <input
                type='file'
                accept='image/*'
                id='inputUploat'
                className='avatarContainer__input'
                onInput={event => selectAvatar(event, setAvatarState)}
                {...register('avatar')}
              />
            </div>

            <div className='fields'>
              <span className='field__content'>
                <label htmlFor='fieldName' className='content__label'>
                  Nome <span className='label__obligationSign'>*</span>
                </label>

                <input
                  type='text'
                  placeholder='Lietson'
                  className='content__input'
                  {...register('name')}
                />

                {errors.name && (
                  <span className='content__messageError'>{errors.name.message}</span>
                )}
              </span>

              <span className='field__content'>
                <label htmlFor='fieldName' className='content__label'>
                  Sobrenome <span className='label__obligationSign'>*</span>
                </label>

                <input
                  type='text'
                  placeholder='Dos Santos'
                  className='content__input'
                  {...register('lastname')}
                />

                {errors.lastname && (
                  <span className='content__messageError'>{errors.lastname.message}</span>
                )}
              </span>
            </div>

            <div className='fields'>
              <span className='field__content'>
                <label htmlFor='fieldSalary' className='content__label'>
                  Salário Base <span className='label__obligationSign'>*</span>
                </label>

                <input
                  type='text'
                  placeholder='32.181,15'
                  className='content__input'
                  {...register('salary')}
                />

                {errors.salary && (
                  <span className='content__messageError'>{errors.salary.message}</span>
                )}
              </span>

              <span className='field__content'>
                <label htmlFor='fieldContract' className='content__label'>
                  Tipo de Contrato <span className='label__obligationSign'>*</span>
                </label>

                <select defaultValue='' className='content__select' {...register('contract')}>
                  <option value='' disabled selected>
                    Selecione...
                  </option>

                  <option value='Estágio'>Estágio</option>
                  <option value='Experiência'>Experiência</option>
                  <option value='Intermitente'>Intermitente</option>
                  <option value='Teletrabalho'>Teletrabalho</option>
                  <option value='Trabalho Eventual'>Trabalho eventual</option>
                  <option value='Trabalho Autônomo'>Trabalho autônomo</option>
                  <option value='Tempo Determinado'>Tempo determinado</option>
                  <option value='Tempo Indeterminado'>Tempo indeterminado</option>
                </select>

                {errors.contract && (
                  <span className='content__messageError'>{errors.contract.message}</span>
                )}
              </span>
            </div>

            <div className='fields'>
              <span className='field__content'>
                <label htmlFor='fieldSector' className='content__label'>
                  Sector <span className='label__obligationSign'>*</span>
                </label>

                <select defaultValue='' className='content__select' {...register('sector')}>
                  <option value='' disabled selected>
                    Selecione...
                  </option>

                  <option value='Sector Acadêmico'>Sector acadêmico</option>
                  <option value='Sector Pedagógico'>Sector pedagógico</option>
                  <option value='Sector Financeiro'>Sector financeiro</option>
                </select>

                {errors.sector && (
                  <span className='content__messageError'>{errors.sector.message}</span>
                )}
              </span>

              <span className='field__content'>
                <label htmlFor='fieldPosition' className='content__label'>
                  Cargo <span className='label__obligationSign'>*</span>
                </label>

                <select defaultValue='' className='content__select' {...register('position')}>
                  <option value='' disabled selected>
                    Selecione...
                  </option>

                  <option value='Professor'>Professor</option>
                  <option value='Diretor'>Diretor</option>
                  <option value='Sub-diretor administrativo'>Sub-diretor administrativo</option>
                  <option value='Contabilista'>Contabilista</option>
                  <option value='Orientador educacional'>Orientador educacional</option>
                  <option value='P.C.A'>P.C.A</option>
                  <option value='Supervisor pedagógico'>Supervisor pedagógico</option>
                  <option value='Orientador pedagógico'>Orientador pedagógico</option>
                  <option value='Secretario'>Secretario</option>
                  <option value='Secretario do sumário'>Secretario do sumário</option>
                  <option value='Chefe da secretaria'>Chefe da secretaria</option>
                  <option value='Profissionais De Biblioteca'>Profissionais da biblioteca</option>
                  <option value='Profissionais Da Cozinha'>Profissionais da cozinha</option>
                  <option value='Profissionais Da Limpeza'>Profissionais da limpeza</option>
                  <option value='Vigia'>Vigias</option>
                </select>

                {errors.position && (
                  <span className='content__messageError'>{errors.position.message}</span>
                )}
              </span>
            </div>

            <div className='fields'>
              <span className='field__content'>
                <label htmlFor='fieldContact' className='content__label'>
                  E-mail <span className='label__obligationSign'>*</span>
                </label>

                <input
                  type='email'
                  placeholder='lietson@gmail.com'
                  className='content__input'
                  {...register('email')}
                />

                {errors.email && (
                  <span className='content__messageError'>{errors.email.message}</span>
                )}
              </span>

              <span className='field__content'>
                <label htmlFor='fieldContact' className='content__label'>
                  Contacto <span className='label__obligationSign'>*</span>
                </label>

                <input
                  type='text'
                  placeholder='937 999 999'
                  className='content__input'
                  {...register('contact')}
                />

                {errors.contact && (
                  <span className='content__messageError'>{errors.contact.message}</span>
                )}
              </span>
            </div>

            <button type='submit' className='btn'>
              Cadastrar
            </button>
          </form>
        </main>
      </Content>
    </Wrapper>
  )
}

export default RegisterEmployeePage
