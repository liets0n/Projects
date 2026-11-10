import React from 'react'
import { Link } from 'react-router-dom'

import { MdArrowBack, MdArrowForward } from 'react-icons/md'

import { Menu } from '../../../components'
import { Wrapper, LeftSide, RightSide } from './styles'

const Description: React.FC = () => {
  return (
    <>
      <Menu />

      <Wrapper>
        <LeftSide>
          <div className="leftSide__element description">
            <label
              htmlFor="description"
              className="element__label description__label"
            >
              descrição
            </label>

            <textarea
              className="element__textarea description__label"
              id="description"
              name="description"
              cols={30}
              rows={10}
            ></textarea>
          </div>
        </LeftSide>

        <RightSide>
          <h1 className="rightSide__title">
            Deixe as pessoas interessadas pela vaga.
          </h1>

          <p className="rightSide__description">
            Crie uma descrição atraente e descritiva para que muitas pessoas se
            sintam interessadas pela vagas.
          </p>

          <div className="rightSide__controle">
            <span className="controle__steps">
              <h2>2 de 5 passos</h2>
            </span>

            <span className="controle__arrows">
              <Link to="/anunciar_vagas" className="arrows__link">
                <MdArrowBack className="link__icon" title="Voltar" />
              </Link>

              <Link to="/anunciar_vagas/assessment" className="arrows__link">
                <MdArrowForward className="link__icon" title="Continuar" />
              </Link>
            </span>
          </div>
        </RightSide>
      </Wrapper>
    </>
  )
}

export default Description
