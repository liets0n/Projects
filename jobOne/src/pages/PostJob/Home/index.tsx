import React from 'react'
import { Link } from 'react-router-dom'

import { MdArrowBack, MdArrowForward } from 'react-icons/md'

import { Wrapper, LeftSide, RightSide } from './styles'
import { Menu } from '../../../components'

const CreateVacancy: React.FC = () => {
  return (
    <>
      <Menu />

      <Wrapper>
        <LeftSide>
          <span className="leftSide__element charge">
            <label htmlFor="charge" className="element__label charge__label">
              Cargo *
            </label>

            <input
              className="element__input charge__label"
              id="charge"
              type="text"
              name="charge"
              placeholder="Cargo"
              required
            />
          </span>

          <span className="leftSide__element enterprise">
            <label
              htmlFor="enterprise"
              className="element__label enterprise__label"
            >
              Empresa *
            </label>

            <input
              className="element__input enterprise__input"
              id="enterprise"
              type="text"
              name="enterprise"
              placeholder="Empresa"
              required
            />
          </span>

          <span className="leftSide__element chargeType">
            <label
              htmlFor="chargeType"
              className="element__label chargeType__label"
            >
              Tipo de Emprego *
            </label>

            <select
              name="chargeType"
              id="chargeType"
              className="chargeType__select"
              required
            >
              <option value="integral" className="select__option">
                Tempo integral
              </option>

              <option value="contract" className="select__option">
                Contrato
              </option>

              <option value="trainee" className="select__option">
                Estágio
              </option>
            </select>
          </span>

          <span className="leftSide__element location">
            <label
              htmlFor="location"
              className="element__label location__label"
            >
              Local da vaga *
            </label>

            <input
              className="element__input location__input"
              id="location"
              type="text"
              name="location"
              placeholder="Localização"
              required
            />
          </span>

          <span className="leftSide__element local">
            <label htmlFor="local" className="element__label local__label">
              Local de trabalho *
            </label>

            <select name="local" id="local" className="local__select" required>
              <option value="present" className="select__option">
                Presencial
              </option>

              <option value="hybrid" className="select__option">
                Híbrido
              </option>

              <option value="remote" className="select__option">
                Remoto
              </option>
            </select>
          </span>
        </LeftSide>

        <RightSide>
          <h1 className="rightSide__title">
            Anuncie a vaga gratuitamente e encontre o candidato perfeito.
          </h1>

          <div className="rightSide__controle">
            <span className="controle__steps">
              <h2>1 de 5 passos</h2>
            </span>

            <span className="controle__arrows">
              <Link to="" aria-disabled="true" className="arrows__link">
                <MdArrowBack className="notActive link__icon" title="Voltar" />
              </Link>

              <Link to="/anunciar_vagas/description" className="arrows__link">
                <MdArrowForward className="link__icon" title="Continuar" />
              </Link>
            </span>
          </div>
        </RightSide>
      </Wrapper>
    </>
  )
}

export default CreateVacancy
