import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { MdArrowUpward } from 'react-icons/md'
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'

import { Wrapper } from './styles'
import { RootState } from '../../redux/store'
import { changeTheme } from '../../redux/features/theme.slice'
import { changeLanguage } from '../../redux/features/language.slice'

const Footer: React.FC = () => {
  const [language, setLanguage] = useState('')

  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  const { idiom } = useSelector((state: RootState) => state.language)

  useEffect(() => {
    void i18n.changeLanguage(idiom)
  }, [language])

  const handleOnChangeLanguage = (e: ChangeEvent<HTMLSelectElement>): void => {
    dispatch(changeLanguage(String(e.target.value)))
    setLanguage(String(e.target.value))
  }

  const handleChangeTheme = (): void => {
    dispatch(changeTheme())
  }

  return (
    <Wrapper>
      <div className="context">
        <div className="context__top">
          <div className="context__top--leftSide">
            <h1 className="leftSie__logo">Joby1</h1>

            <div className="togglers">
              <select
                name="language"
                id="language"
                className="leftSie__select"
                defaultValue={idiom}
                onChange={e => handleOnChangeLanguage(e)}
              >
                <option value="pt" className="select__option">
                  {t('Footer__selector--portuguese')}
                </option>

                <option value="es" className="select__option">
                  {t('Footer__selector--spanish')}
                </option>

                <option value="en" className="select__option">
                  {t('Footer__selector--english')}
                </option>

                <option value="ru" className="select__option">
                  {t('Footer__selector--russian')}
                </option>
              </select>

              <div className="theme">
                <input
                  type="checkbox"
                  name="theme"
                  id="theme"
                  className="theme__input"
                  onChange={() => handleChangeTheme()}
                />

                <label htmlFor="theme" className="theme__label">
                  <RiSunFill className="label__sunIcon" />
                  <RiMoonClearFill className="label__moonIcon" />

                  <span className="label__ball"></span>
                </label>
              </div>
            </div>
          </div>

          <div className="context__top--rightSide">
            <ul className="rightSide__list explore">
              <li className="list__title">
                <h2>{t('Footer__listOne--title')}</h2>
              </li>

              <li className="list__item">
                <Link to="#" className="item__link">
                  {t('Footer__listOne--itemOne')}
                </Link>
              </li>

              <li className="list__item">
                <Link to="#" className="item__link">
                  {t('Footer__listOne--itemTwo')}
                </Link>
              </li>

              <li className="list__item">
                <Link to="#" className="item__link">
                  {t('Footer__listOne--itemThree')}
                </Link>
              </li>

              <li className="list__item">
                <Link to="#" className="item__link">
                  {t('Footer__listOne--itemFour')}
                </Link>
              </li>
            </ul>

            <ul className="rightSide__list about">
              <li className="list__title">
                <h2>{t('Footer__listTwo--title')}</h2>
              </li>

              <li className="list__item">
                <Link to="/sobre" className="item__link">
                  {t('Footer__listTwo--itemOne')}
                </Link>
              </li>

              <li className="list__item">
                <Link to="#" className="item__link">
                  {t('Footer__listTwo--itemTwo')}
                </Link>
              </li>

              <li className="list__item">
                <Link to="#" className="item__link">
                  {t('Footer__listTwo--itemThree')}
                </Link>
              </li>
            </ul>

            <ul className="rightSide__list help">
              <li className="list__title">
                <h2>{t('Footer__listThree--title')}</h2>
              </li>

              <li className="list__item">
                <Link to="#" className="item__link">
                  {t('Footer__listThree--itemOne')}
                </Link>
              </li>

              <li className="list__item">
                <Link to="#" className="item__link">
                  {t('Footer__listThree--itemTwo')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <span className="separator"></span>

        <div className="context__bottom">
          <p>Joby1&copy;2022 {t('Footer__copyRight')}</p>

          <ul className="list">
            <Link to="#">
              <li className="list__item">{t('Footer__Policy')}</li>
            </Link>
            <Link to="#">
              <li className="list__item">{t('Footer__Term')}</li>
            </Link>
          </ul>
        </div>
      </div>

      <button
        type="button"
        className="btnScrollToTop"
        title="Voltar para topo"
        onClick={() => scrollTo({ left: 0, top: 0, behavior: 'smooth' })}
      >
        <MdArrowUpward className="icon" />
      </button>
    </Wrapper>
  )
}

export default Footer
