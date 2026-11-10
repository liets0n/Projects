import React from 'react'

import { MdOutlineLocationOn, MdBookmark } from 'react-icons/md'

import Pictor_1 from './../../assets/images/pictor1.jpg'
import Pictor_2 from './../../assets/images/pictor2.jpg'
import Pictor_3 from './../../assets/images/pictor3.jpg'

import { Wrapper } from './styles'

interface PropTypes {
  logo: string
  companyName: string
  vacancyName: string
  vacancyLocation: string
  description: string
  color: string
}

const VacancyPost: React.FC<PropTypes> = ({
  logo,
  companyName,
  vacancyName,
  vacancyLocation,
  description,
  color
}) => {
  return (
    <Wrapper color={color}>
      <span className="vacancy__top">
        <span className="top__leftSide">
          <img
            src={logo}
            className="leftSide__enterpriseImage"
            alt="Discord Logo"
          />

          <span className="leftSide__text">
            <p className="vacancy__title">
              {vacancyName.length > 9
                ? `${vacancyName.slice(0, 8)}...`
                : vacancyName}
            </p>
            <p className="vacancy__companyName">{companyName}</p>
          </span>
        </span>

        <span className="top__saveIcon">
          <MdBookmark className="saveIcon__icon" title="Salvar" />
        </span>
      </span>

      <p className="vacancy__location">
        <MdOutlineLocationOn className="location__icon" /> {vacancyLocation}
      </p>
      <p className="vacancy__description">
        {description.length > 71
          ? `${description.slice(0, 71)}...`
          : description}
      </p>

      <div className="candidate">
        <span className="candidate__pictor">
          <img src={Pictor_1} className="pictor pictor--1" alt="Pictor 1" />
          <img src={Pictor_2} className="pictor pictor--2" alt="Pictor 2" />
          <img src={Pictor_3} className="pictor pictor--3" alt="Pictor 3" />
        </span>

        <p>3 Total de candidaturas</p>
      </div>
    </Wrapper>
  )
}

export default VacancyPost
