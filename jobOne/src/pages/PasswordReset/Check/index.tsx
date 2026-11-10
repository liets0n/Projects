import React from 'react'

import { MdArrowBack } from 'react-icons/md'

import { Wrapper, RightSide, LeftSide } from './styles'

const Check: React.FC = () => {
  return (
    <Wrapper>
      <LeftSide>
        <form action="/" method="post">
          <MdArrowBack
            className="form__prevHistoryIcon"
            title="Voltar"
            onClick={() => history.back()}
          />

          <h1 className="form__title">Esqueceu sua senha?</h1>
          <h2 className="form__subtitle">
            Redefinir senha em duas etapas rápidas.
          </h2>

          <span className="form__emailField">
            <label htmlFor="email" className="emailField__label">
              E-mail *
            </label>

            <input
              type="email"
              className="emailField__input"
              id="email"
              name="email"
              placeholder="Entre como seu E-mail"
              required
            />
          </span>

          <button
            type="submit"
            className="form__btn form__btn--submit"
            title="Enviar Instruções para redefinir a senha"
          >
            Enviar Instruções
          </button>
        </form>
      </LeftSide>

      <RightSide />
    </Wrapper>
  )
}

export default Check
