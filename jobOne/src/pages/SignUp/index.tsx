import React, { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

import { BsEyeSlash, BsEye } from 'react-icons/bs'
import { MdArrowBack } from 'react-icons/md'

import { Wrapper, RightSide, LeftSide } from './styles'

const signUp: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  const [passwordInputType, setPasswordInputType] = useState<string>('password')
  const [confirmPasswordInputType, setConfirmPasswordInputType] =
    useState<string>('password')

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (password === confirmPassword) {
      console.log({ userName, email, password })
    } else {
      toast.error('As senhas não coincidem 😕')
    }
  }

  return (
    <Wrapper>
      <LeftSide>
        <form action="/" method="post" onSubmit={e => handleSubmit(e)}>
          <MdArrowBack
            className="form__prevHistoryIcon"
            title="Voltar"
            onClick={() => history.back()}
          />

          <h1 className="form__title">Bem-Vindo a joby1</h1>
          <h2 className="form__subtitle">O caminho para o seu novo emprego</h2>

          <span className="form__field">
            <label htmlFor="name" className="field__label">
              Nome *
            </label>

            <input
              type="text"
              className="field__input"
              id="name"
              name="name"
              minLength={2}
              maxLength={250}
              placeholder="Entre com o seu nome"
              onChange={e => setUserName(e.target.value)}
              required
            />
          </span>

          <span className="form__field">
            <label htmlFor="email" className="field__label">
              E-mail *
            </label>

            <input
              type="email"
              className="field__input"
              id="email"
              name="email"
              placeholder="Entre com o seu E-mail"
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
                  data-cy="passwordFieldIcon"
                />
              ) : (
                <BsEye
                  className="wrapper__icon"
                  name="eyes open"
                  title="Não exibir senha"
                  onClick={() => setPasswordInputType('password')}
                  data-cy="passwordFieldIcon"
                />
              )}
            </span>
          </span>

          <span className="form__field">
            <label htmlFor="password" className="field__label">
              Confirme sua senha *
            </label>

            <span className="field__wrapper">
              <input
                type={confirmPasswordInputType}
                className="wrapper__input field__input"
                name="confirmPassword"
                id="confirmPassword"
                minLength={6}
                maxLength={150}
                placeholder="Entre novamente com a sua senha"
                onChange={e => setConfirmPassword(e.target.value)}
                required
              />

              {confirmPasswordInputType === 'password' ? (
                <BsEyeSlash
                  className="wrapper__icon"
                  name="eyes closed"
                  title="Exibir senha"
                  onClick={() => setConfirmPasswordInputType('text')}
                  data-cy="confirmPasswordFieldIcon"
                />
              ) : (
                <BsEye
                  className="wrapper__icon"
                  name="eyes open"
                  title="Não exibir senha"
                  onClick={() => setConfirmPasswordInputType('password')}
                  data-cy="confirmPasswordFieldIcon"
                />
              )}
            </span>
          </span>

          <span className="form__wrapper">
            <span className="wrapper__checkField">
              <input
                type="checkbox"
                className="checkField__input"
                id="agree"
                name="agree"
                required
              />

              <label htmlFor="agree" className="checkField__label">
                Concordo com os <Link to="#">Termos</Link> o
                <Link to="#"> Políticas</Link>
              </label>
            </span>
          </span>

          <button
            type="submit"
            className="form__btnSubmit"
            title="Cadastrar-se"
          >
            Cadastrar
          </button>

          <p>
            Já tem uma conta? <Link to="/entrar">Entrar</Link>
          </p>
        </form>
      </LeftSide>

      <RightSide />
    </Wrapper>
  )
}

export default signUp
