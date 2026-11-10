import React, { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'

import { BsEyeSlash, BsEye } from 'react-icons/bs'

import { Wrapper, RightSide, LeftSide } from './styles'

const Confirm: React.FC = () => {
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [passwordInputType, setPasswordInputType] = useState<string>('password')
  const [confirmPasswordInputType, setConfirmPasswordInputType] =
    useState<string>('password')

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (password === confirmPassword) {
      console.log({ password })
    } else {
      toast.error('As senhas não coincidem 😕')
    }
  }

  return (
    <Wrapper>
      <LeftSide>
        <form action="/" method="post" onSubmit={e => handleSubmit(e)}>
          <h1 className="form__title">Redefina sua senha</h1>
          <h2 className="form__subtitle">
            Crie uma senha nova com pelo menos 8 caracteres.
          </h2>

          <span className="form__passwordField">
            <label htmlFor="password" className="passwordField__label">
              Senha *
            </label>

            <span className="passwordField__wrapper">
              <input
                type={passwordInputType}
                className="passwordField__input"
                id="password"
                name="password"
                minLength={6}
                maxLength={150}
                placeholder="Senha nova"
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

          <span className="form__passwordField">
            <label htmlFor="confirmPassword" className="passwordField__label">
              Confirme sua senha *
            </label>

            <span className="passwordField__wrapper">
              <input
                type={confirmPasswordInputType}
                className="passwordField__input"
                name="confirmPassword"
                id="confirmPassword"
                minLength={6}
                maxLength={150}
                placeholder="Reinsira a senha nova"
                onChange={e => setConfirmPassword(e.target.value)}
                required
              />

              {confirmPasswordInputType === 'password' ? (
                <BsEyeSlash
                  className="wrapper__icon"
                  name="eyes closed"
                  title="Exibir senha"
                  onClick={() => setConfirmPasswordInputType('text')}
                />
              ) : (
                <BsEye
                  className="wrapper__icon"
                  name="eyes open"
                  title="Não exibir senha"
                  onClick={() => setConfirmPasswordInputType('password')}
                />
              )}
            </span>
          </span>

          <button
            type="submit"
            className="form__btn form__btn--submit"
            title="Redefinir Senha"
          >
            Redefinir Senha
          </button>
        </form>
      </LeftSide>

      <RightSide />
    </Wrapper>
  )
}

export default Confirm
