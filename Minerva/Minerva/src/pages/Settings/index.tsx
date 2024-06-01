import React, { useState, useEffect } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch, useSelector } from 'react-redux'

import { Eye, EyeSlash } from '@phosphor-icons/react'

import { Wrapper, Content } from './styles'
import { selectAvatar } from './../../utils'
import { RootState } from './../../context/store'
import { changeUserEmail } from './../../services'
import { SideBar, Modal } from './../../components'
import { changeCurrentPage } from './../../context/sidebar.slice'
import { nameFormatter, numberAreIncluded } from './../../helpers'

import AvatarDefault from './../../assets/illustrations/Avatar.png'

const handleSubmitFormDataSchema = z.object({
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
  email: z.string().nonempty('Campo obrigatório').email('E-mail inválido'),
  currentPassword: z.string().max(255, 'Informe 255 caracteres ou menos para senha'),
  password: z.string().max(255, 'Informe 255 caracteres ou menos para senha'),
})

type DataType = {
  name?: string
  lastname?: string
  email?: string | undefined
  currentPassword?: string
  password?: string
}

type handleSubmitFormDataType = Zod.infer<typeof handleSubmitFormDataSchema>

const Settings = () => {
  const dispatch = useDispatch()
  const { userAccountData } = useSelector((state: RootState) => state.userAccount)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<handleSubmitFormDataType>({
    shouldFocusError: true,
    resolver: zodResolver(handleSubmitFormDataSchema),
  })

  const [avatarState, setAvatarState] = useState<any>(AvatarDefault)
  const [name, setName] = useState<any>(userAccountData?.name)
  const [openModal, setOpenModal] = useState(false)
  const [openSecondModal, setOpenSecondModal] = useState(false)
  const [email, setEmail] = useState(userAccountData?.email)
  const [lastname, setLastname] = useState(userAccountData?.lastname)
  const [password, setPassword] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)

  const handleSubmitFormDataName = (data: DataType) => {
    // console.log(data)
  }

  const handleSubmitFormDataEmail = (data: DataType) => {
    changeUserEmail(email)
  }

  const handleSubmitFormDataPassword = (data: DataType) => {
    // console.log(data)
  }

  useEffect(() => {
    dispatch(changeCurrentPage('Definição'))
  }, [])

  return (
    <Wrapper>
      <SideBar />

      {openModal && (
        <Modal>
          <h1 className='content__title'>Confirmar a exclusão</h1>
          <p className='content__description'>Tem certeza que gostaria de excluir este usuário?</p>

          <div className='content__buttons'>
            <button
              className='buttons__element buttons__element--cancel'
              onClick={() => setOpenModal(state => !state)}
            >
              Cancelar
            </button>

            <button
              className='buttons__element buttons__element--confirm'
              onClick={() => {
                setOpenModal(state => !state)
              }}
            >
              Sim, excluir
            </button>
          </div>
        </Modal>
      )}

      {openSecondModal && (
        <Modal>
          <h1 className='content__title'>Confirmar indentidade</h1>
          <p className='content__description'>
            Para fazer qualquer alteração tem que confirmar a sua senha?
          </p>

          <div className='content__buttons'>
            <button
              className='buttons__element buttons__element--cancel'
              onClick={() => setOpenSecondModal(state => !state)}
            >
              Cancelar
            </button>

            <button
              className='buttons__element buttons__element--success'
              onClick={() => setOpenSecondModal(state => !state)}
            >
              concluir
            </button>
          </div>
        </Modal>
      )}

      <Content>
        <div className='settings'>
          <div className='settings__top'>
            <h1 className='top__title'>Definição</h1>
            <p className='top__subtitle'>
              Pode editar todas Informações relacionadas ao seu perfil.
            </p>

            <div className='tops'>
              <ul className='top__tabs'>
                <li className='tabs__item tabs__item--active'>
                  <p>Minha Conta</p>
                </li>

                <li className='tabs__item'>
                  <p>Usuários</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='configs'>
          <div className='configs__avatarContainer'>
            <img
              src={avatarState !== false ? avatarState : AvatarDefault}
              id='avatar'
              alt='Avatar do funcionário'
              className='avatarContainer__image'
            />

            <label htmlFor='avatar' className='avatarContainer__label'>
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
              id='avatar'
              className='avatarContainer__input'
              onInput={event => selectAvatar(event, setAvatarState)}
            />
          </div>

          <form onSubmit={handleSubmit(handleSubmitFormDataName)} className='configs__wrapper'>
            <span className='wrapper__content'>
              <label className='content__label'>Nome</label>

              <span className='content__container'>
                <span className='container__aside'>
                  <input
                    type='text'
                    id='name'
                    className='content__input'
                    placeholder='Lietson'
                    value={name}
                    aria-invalid={Boolean(errors.name)}
                    onInput={(e: any) => setName(e.target.value)}
                    {...register('name')}
                  />

                  {errors.name && (
                    <span className='content__messageError'>{errors.name.message}</span>
                  )}
                </span>

                <span className='container__aside'>
                  <input
                    type='text'
                    id='lastname'
                    className='content__input'
                    placeholder='Dos Santos'
                    value={lastname}
                    aria-invalid={Boolean(errors.lastname)}
                    onInput={(e: any) => setLastname(e.target.value)}
                    {...register('lastname')}
                  />

                  {errors.lastname && (
                    <span className='content__messageError'>{errors.lastname.message}</span>
                  )}
                </span>
              </span>
            </span>

            <button
              type='submit'
              className='wrapper__btn'
              disabled={
                name !== userAccountData?.name || lastname !== userAccountData?.lastname
                  ? false
                  : true
              }
            >
              Salvar
            </button>
          </form>

          <form onSubmit={handleSubmit(handleSubmitFormDataEmail)} className='configs__wrapper'>
            <span className='wrapper__content'>
              <label className='content__label'>E-mail</label>

              <input
                type='email'
                placeholder='lietson@gmail.com'
                className='content__input'
                value={email}
                aria-invalid={Boolean(errors.email)}
                onInput={(e: any) => setEmail(e.target.value)}
                {...register('email')}
              />

              {errors.email && (
                <span className='content__messageError'>{errors.email.message}</span>
              )}
            </span>

            <button
              type='submit'
              className='wrapper__btn'
              disabled={email !== userAccountData?.email ? false : true}
            >
              Salvar
            </button>
          </form>

          <form onSubmit={handleSubmit(handleSubmitFormDataPassword)} className='configs__wrapper'>
            <span className='wrapper__content'>
              <label className='content__label'>Senha</label>

              <span className='content__container'>
                <span className='container__aside'>
                  <div className='content__input content__input--password'>
                    <input
                      type={showCurrentPassword === false ? 'password' : 'text'}
                      id='currentPassword'
                      className='input__field'
                      placeholder='Senha Actual'
                      minLength={6}
                      value={currentPassword}
                      aria-invalid={Boolean(errors.currentPassword)}
                      onInput={(e: any) => setCurrentPassword(e.target.value)}
                      required
                      {...register('currentPassword')}
                    />

                    {showCurrentPassword === false ? (
                      <EyeSlash
                        className='input__icon'
                        onClick={() => setShowCurrentPassword(state => !state)}
                      />
                    ) : (
                      <Eye
                        className='input__icon'
                        onClick={() => setShowCurrentPassword(state => !state)}
                      />
                    )}
                  </div>

                  {errors.currentPassword && (
                    <span className='content__messageError'>{errors.currentPassword.message}</span>
                  )}
                </span>

                <span className='container__aside'>
                  <div className='content__input content__input--password'>
                    <input
                      type={showPassword === false ? 'password' : 'text'}
                      id='password'
                      className='input__field'
                      placeholder='Senha Nova'
                      minLength={6}
                      value={password}
                      aria-invalid={Boolean(errors.password)}
                      onInput={(e: any) => setPassword(e.target.value)}
                      required
                      {...register('password')}
                    />

                    {showPassword === false ? (
                      <EyeSlash
                        className='input__icon'
                        onClick={() => setShowPassword(state => !state)}
                      />
                    ) : (
                      <Eye
                        className='input__icon'
                        onClick={() => setShowPassword(state => !state)}
                      />
                    )}
                  </div>

                  {errors.password && (
                    <span className='content__messageError'>{errors.password.message}</span>
                  )}
                </span>
              </span>
            </span>

            <button
              type='submit'
              className='wrapper__btn'
              disabled={currentPassword !== '' && password !== '' ? false : true}
            >
              Salvar
            </button>
          </form>

          <div className='configs__deleteAccount'>
            <h2 className='deleteAccount__title'>Apagar a sua conta</h2>
            <p className='deleteAccount__subtitle'>Apagar permanentemente a sua conta.</p>

            <button
              type='submit'
              className='deleteAccount__btn'
              onClick={() => setOpenModal(state => !state)}
            >
              Apagar conta
            </button>
          </div>
        </div>
      </Content>
    </Wrapper>
  )
}

export default Settings
