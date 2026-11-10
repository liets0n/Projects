import React from 'react'

import { Wrapper } from './styles'

interface PropTypes {
  filters: string[]
  setFilters: any
}

export const Filter: React.FC<PropTypes> = ({ filters, setFilters }) => {
  const filter = (value: string): void => {
    if (filters.includes(value)) {
      setFilters((prevState: any) =>
        prevState.filter((item: string) => {
          return item !== value
        })
      )
    } else {
      setFilters((prevState: any) => [...prevState, value])
    }
  }

  return (
    <Wrapper>
      <ul className="filter__list">
        <li className="list__item list__checkBox list__checkBox--order">
          <h2 className="checkBox__title">Ordenar por</h2>

          <ul className="checkBox__wrapper">
            <li className="wrapper__items">
              <input
                type="checkbox"
                name="recent"
                id="recent"
                className="items__input"
                onChange={() => filter('Luanda')}
              />

              <label htmlFor="recent" className="items__label">
                Mais Recentes
              </label>
            </li>

            <li className="wrapper__items">
              <input
                type="checkbox"
                name="important"
                id="important"
                className="items__input"
                onChange={() => filter('important')}
              />

              <label htmlFor="important" className="items__label">
                Mais Relevantes
              </label>
            </li>
          </ul>
        </li>

        <li className="list__item list__checkBox">
          <h2 className="checkBox__title">Data de anúncio</h2>

          <ul className="checkBox__wrapper">
            <li className="wrapper__items">
              <input
                type="checkbox"
                name="lastday"
                id="lastday"
                className="items__input"
                onChange={() => filter('lastday')}
              />

              <label htmlFor="lastday" className="items__label">
                Últimas 24 horas
              </label>
            </li>

            <li className="wrapper__items">
              <input
                type="checkbox"
                name="week"
                id="week"
                className="items__input"
                onChange={() => filter('week')}
              />

              <label htmlFor="week" className="items__label">
                Última semana
              </label>
            </li>

            <li className="wrapper__items">
              <input
                type="checkbox"
                name="month"
                id="month"
                className="items__input"
                onChange={() => filter('month')}
              />

              <label htmlFor="month" className="items__label">
                Último mês
              </label>
            </li>

            <li className="wrapper__items">
              <input
                type="checkbox"
                name="anytime"
                id="anytime"
                className="items__input"
                onChange={() => filter('anytime')}
              />

              <label htmlFor="anytime" className="items__label">
                A qualquer momento
              </label>
            </li>
          </ul>
        </li>

        <li className="list__item list__checkBox">
          <h2 className="checkBox__title">Nível de Experiência</h2>

          <ul className="checkBox__wrapper">
            <li className="wrapper__items">
              <input
                type="checkbox"
                name="trainee"
                id="trainee"
                className="items__input"
                onChange={() => filter('trainee')}
              />

              <label htmlFor="trainee" className="items__label">
                Estágio
              </label>
            </li>

            <li className="wrapper__items">
              <input
                type="checkbox"
                name="junior"
                id="junior"
                className="items__input"
                onChange={() => filter('junior')}
              />

              <label htmlFor="junior" className="items__label">
                Júnior
              </label>
            </li>

            <li className="wrapper__items">
              <input
                type="checkbox"
                name="middle"
                id="middle"
                className="items__input"
                onChange={() => filter('middle')}
              />

              <label htmlFor="middle" className="items__label">
                Pleno
              </label>
            </li>

            <li className="wrapper__items">
              <input
                type="checkbox"
                name="senior"
                id="senior"
                className="items__input"
                onChange={() => filter('senior')}
              />

              <label htmlFor="senior" className="items__label">
                Senior
              </label>
            </li>

            <li className="wrapper__items">
              <input
                type="checkbox"
                name="director"
                id="director"
                className="items__input"
                onChange={() => filter('director')}
              />

              <label htmlFor="director" className="items__label">
                Director
              </label>
            </li>
          </ul>
        </li>

        <li className="list__item list__checkBox">
          <h2 className="checkBox__title">Tipo de Vaga</h2>

          <ul className="checkBox__wrapper">
            <li className="wrapper__items">
              <input
                type="checkbox"
                name="fulltime"
                id="fulltime"
                className="items__input"
                onChange={() => filter('fulltime')}
              />

              <label htmlFor="fulltime" className="items__label">
                Tempo integral
              </label>
            </li>

            <li className="wrapper__items">
              <input
                type="checkbox"
                name="contract"
                id="contract"
                className="items__input"
                onChange={() => filter('contract')}
              />

              <label htmlFor="contract" className="items__label">
                Contrato
              </label>
            </li>

            <li className="wrapper__items">
              <input
                type="checkbox"
                name="probation"
                id="probation"
                className="items__input"
                onChange={() => filter('probation')}
              />

              <label htmlFor="probation" className="items__label">
                Estágio
              </label>
            </li>
          </ul>
        </li>

        <li className="list__item list__checkBox">
          <h2 className="checkBox__title">Presencial/Remoto</h2>

          <ul className="checkBox__wrapper">
            <li className="wrapper__items">
              <input
                type="checkbox"
                name="remote"
                id="remote"
                className="items__input"
                onChange={() => filter('remote')}
              />

              <label htmlFor="remote" className="items__label">
                Remoto
              </label>
            </li>

            <li className="wrapper__items">
              <input
                type="checkbox"
                name="hybrid"
                id="hybrid"
                className="items__input"
                onChange={() => filter('hybrid')}
              />

              <label htmlFor="hybrid" className="items__label">
                Híbrido
              </label>
            </li>

            <li className="wrapper__items">
              <input
                type="checkbox"
                name="present"
                id="present"
                className="items__input"
                onChange={() => filter('present')}
              />

              <label htmlFor="present" className="items__label">
                Presencial
              </label>
            </li>
          </ul>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Filter
