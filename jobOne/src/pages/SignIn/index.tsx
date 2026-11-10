import React, { FormEvent, useState } from 'react'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { MdArrowBack } from 'react-icons/md'
import { BsEyeSlash, BsEye } from 'react-icons/bs'

import Google from './../../assets/logos/google.png'
import Linkdin from './../../assets/logos/linkdin.svg'

import { Wrapper, RightSide, LeftSide } from './styles'
import { login } from '../../redux/features/auth.slice'

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required()
})

const signIn: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordInputType, setPasswordInputType] = useState<string>('password')

  const dispatch = useDispatch()

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    dispatch(login({ email, password }))
  }

  return (
    <Wrapper>
      <LeftSide>
        <form action="/" method="post" onSubmit={handleSubmit}>
          <MdArrowBack
            className="form__prevHistoryIcon"
            title="Voltar"
            onClick={() => history.back()}
          />

          <h1 className="form__title">Bem-Vindo(a) Novamente</h1>
          <h2 className="form__subtitle">
            Por favor informe as suas credenciais.
          </h2>

          <span className="form__field">
            <label htmlFor="email" className="field__label">
              E-mail *
            </label>

            <input
              type="email"
              className="field__input"
              id="email"
              name="email"
              placeholder="Entre como seu E-mail"
              onChange={e => setEmail(e.target.value)}
              required
            />
          </span>

          <span className="form__field">
            <label htmlFor="password" className="field__label">
              Senha *
            </label>

            <span className="field__wrapper">
              <input
                type={passwordInputType}
                className="wrapper__input field__input"
                id="password"
                name="password"
                placeholder="Entre com a sua senha"
                minLength={6}
                maxLength={150}
                onChange={e => setPassword(e.target.value)}
                required
              />

              {passwordInputType === 'password' ? (
                <BsEyeSlash
                  className="wrapper__icon"
                  name="eyes closed"
                  title="Exibir senha"
                  onClick={() => setPasswordInputType('text')}
                />
              ) : (
                <BsEye
                  className="wrapper__icon"
                  name="eyes open"
                  title="Não exibir senha"
                  onClick={() => setPasswordInputType('password')}
                />
              )}
            </span>
          </span>

          <span className="form__wrapper">
            <span className="wrapper__checkField">
              <input
                type="checkbox"
                className="checkField__input"
                id="remember"
                name="remember"
              />

              <label htmlFor="remember" className="checkField__label">
                Lembrar da senha
              </label>
            </span>

            <Link
              to="/password_resets/check"
              className="wrapper__forgotPassword"
            >
              Esqueci a senha
            </Link>
          </span>

          <button
            type="submit"
            className="form__btn form__btn--submit"
            title="Entrar em sua conta"
          >
            Entrar
          </button>

          <button
            type="button"
            className="form__btn form__btn--google"
            title="Continuar com o Google"
          >
            <img src={Google} className="btn__image" alt="Logo do google" />
            Continuar com o Google
          </button>

          <button
            type="button"
            className="form__btn form__btn--linkdin"
            title="Continuar com o Linkdin"
          >
            <img src={Linkdin} className="btn__image" alt="Logo do linkdin" />
            Continuar com o Linkdin
          </button>

          <p>
            Não tem uma conta? <Link to="/cadastrar">Cadastrar</Link>
          </p>
        </form>
      </LeftSide>

      <RightSide />
    </Wrapper>
  )
}

export default signIn
