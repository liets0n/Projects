import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'

import {
  MdSearch,
  MdOutlineHail,
  MdOutlineExplore,
  MdBusinessCenter,
  MdOutlineVerified,
  MdOutlineWorkspaces,
  MdOutlineLocationOn,
  MdOutlineBusinessCenter
} from 'react-icons/md'
import { RiUserAddFill, RiUserFill } from 'react-icons/ri'
import { BsFillFileEarmarkMedicalFill } from 'react-icons/bs'

import Google from './../../assets/logos/google.png'
import Tiktok from './../../assets/logos/tiktok.svg'
import Github from './../../assets/logos/github.png'
import Amazon from './../../assets/logos/amazon.svg'
import Discord from './../../assets/logos/discord.png'
import Linkdin from './../../assets/logos/linkdin.svg'
import Facebook from './../../assets/logos/facebook.png'
import Microsoft from './../../assets/logos/microsoft.svg'
import boy_studying from './../../assets/illustrations/boy_studying.svg'
import couple_using_computer from './../../assets/illustrations/couple_using_computer.svg'
import young_man_using_computer from './../../assets/illustrations/young_man_using_computer.svg'

import Ibm_Logo from './../../assets/logos/ibm_logo.png'
import Google_Logo from './../../assets/logos/google_logo.png'
import Unitel_Logo from './../../assets/logos/unitel_logo.png'
import Lenovo_Logo from './../../assets/logos/lenovo_logo.png'
import nitendo_Logo from './../../assets/logos/nintendo_logo.png'
import Microsoft_Logo from './../../assets/logos/microsoft_logo.png'

import {
  Menu,
  Intro,
  Stage,
  Steps,
  Motive,
  Partner,
  Wrapper,
  Vacancies,
  SearchField
} from './styles'
import { JobPreview, Footer } from '../../components'

const Home: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <>
      <Menu>
        <nav className="menu">
          <h1 className="menu__title">
            <Link to="/" className="title__link">
              Joby1
            </Link>
          </h1>

          <span className="Menu__btnWrapper">
            <button
              type="button"
              className="btnWrapper__item btnWrapper__item--signIn"
              title="Acessar a sua conta"
              onClick={() => navigate('/entrar')}
            >
              {t('menu--signInBtn')}
            </button>

            <button
              type="button"
              className="btnWrapper__item btnWrapper__item--signUp"
              title="Criar um conta"
              onClick={() => navigate('/cadastrar')}
            >
              {t('menu--signUpBtn')}
            </button>
          </span>
        </nav>
      </Menu>

      <Wrapper>
        <Intro>
          <div className="top__leftSide">
            <h1 className="leftSide__title">{t('Home__section_1--title')}</h1>

            <p className="leftSide__description">
              {t('Home__section_1--description')}
            </p>

            <SearchField>
              <span className="searchField__work">
                <label htmlFor="work" className="work__label">
                  <MdOutlineBusinessCenter className="work__icon" />
                </label>

                <input
                  type="text"
                  className="work__input"
                  id="work"
                  name="work"
                  title="work"
                  placeholder={t('Home__section_1--inputCharge')}
                />
              </span>

              <span className="searchField__location">
                <label htmlFor="location" className="location__label">
                  <MdOutlineLocationOn className="location__icon" />
                </label>

                <input
                  type="text"
                  className="location__input"
                  id="location"
                  name="location"
                  title="location"
                  placeholder={t('Home__section_1--inputLocation')}
                />
              </span>

              <button
                type="button"
                className="searchField__btnSubmit"
                title={t('Home__section_1--inputBtnSubmit')}
              >
                <MdSearch className="btnSubmit__icon" />
              </button>
            </SearchField>
          </div>

          <div className="top__rightSide">
            <img
              src={young_man_using_computer}
              className="rightSide__illustrations"
              alt="Young_man_using_computer"
              title={t('Home__section_1--illustration')}
            />
          </div>
        </Intro>

        <Vacancies>
          <h1 className="vacancies__title">{t('Home__section_2--title')}</h1>
          <h2 className="vacancies__subtitle">
            {t('Home__section_2--description')}
          </h2>

          <div className="vacanciesPost">
            <span className="vacanciesPost__column">
              <JobPreview
                logo={Google}
                color="#488fff"
                companyName="Google"
                vacancyName="Front-End"
                vacancyLocation="Angola, Luanda"
                description="Responsável pela codificação das interfaces das aplicações web"
              />

              <JobPreview
                logo={Microsoft}
                color="#7c7c7c"
                companyName="Microsoft"
                vacancyName="C# Developer"
                vacancyLocation="Portugal, Porto"
                description="Responsável pelo desenvolvimento e pelas manutenções mensais das principais aplicações  da empresa."
              />

              <JobPreview
                logo={Discord}
                color="#fcce74"
                companyName="Discord"
                vacancyName="React Developer"
                vacancyLocation="Egito, Cairo"
                description="Responsável pelo desenvolvimento e planeamento das interfaces dos aplicativos aplicativos."
              />

              <JobPreview
                logo={Github}
                color="#f75b60"
                companyName="Github"
                vacancyName="Full-Stack"
                vacancyLocation="Brasil, Rio de Janeiro"
                description="Responsável pelo desenvolvimento e planeamento e manutenções dos novos projetos da empresa."
              />
            </span>

            <span className="vacanciesPost__column">
              <JobPreview
                logo={Tiktok}
                color="#ff47b8"
                companyName="Tiktok"
                vacancyName="Analista de Dados"
                vacancyLocation="Portugal, Lisboa"
                description="Responsável por analisar o percurso da empresa revelar detalhes minuciosos para o desempenho da empresa"
              />

              <JobPreview
                logo={Facebook}
                color="#d447ff"
                companyName="Facebook"
                vacancyName="Back-End"
                vacancyLocation="Russia, Moscovo"
                description="Responsável pelo desenvolvimento de API's comunicação do front-end com o banco de dados "
              />

              <JobPreview
                logo={Linkdin}
                color="#91ff47"
                companyName="Linkdin"
                vacancyName="UI/UX"
                vacancyLocation="USA, NY"
                description="Responsável pelo desenvolvimento de interfaces do usuário"
              />

              <JobPreview
                logo={Amazon}
                color="#0c222c"
                companyName="Amazon"
                vacancyName="IA Developer"
                vacancyLocation="Marrocos, Casablanca"
                description="Responsável pelo desenvolvimento de Inteligências Artificiais que serão usadas para o melhor desempenho da empresa"
              />
            </span>
          </div>
        </Vacancies>

        <Motive>
          <div className="motive__leftSide">
            <h2 className="leftSide__title">{t('Home__section_3--title')}</h2>

            <p className="leftSide__description">
              {t('Home__section_3--description')}
            </p>

            <ul className="leftSide__list">
              <li className="list__item">
                <MdOutlineVerified className="item__icon" />
                {t('Home__section_3--ListFirstItem')}
              </li>

              <li className="list__item">
                <MdOutlineVerified className="item__icon" />
                {t('Home__section_3--ListSecondItem')}
              </li>

              <li className="list__item">
                <MdOutlineVerified className="item__icon" />
                {t('Home__section_3--ListThirdItem')}
              </li>

              <li className="list__item">
                <MdOutlineVerified className="item__icon" />
                {t('Home__section_3--ListForthItem')}
              </li>

              <li className="list__item">
                <MdOutlineVerified className="item__icon" />
                {t('Home__section_3--ListFifthItem')}
              </li>
            </ul>
          </div>

          <div className="motive__rightSide">
            <img
              src={couple_using_computer}
              className="leftSide__illustrations"
              alt={t('Home__section_3--illustration')}
              title={t('Home__section_3--illustration')}
            />
          </div>
        </Motive>

        <Steps>
          <h2 className="steps__title">{t('Home__section_4--title')}</h2>

          <h3 className="steps__subtitle">
            {t('Home__section_4--description')}
          </h3>

          <div className="steps__blocks">
            <span className="block block--1">
              <span className="block__wrapperIcon">
                <RiUserAddFill className="wrapperIcon__icon" />
              </span>

              <p className="block__title">
                {t('Home__section_4--blockTitleOne')}
              </p>
              <p className="block__description">
                {t('Home__section_4--blockTitleOneDescription')}
              </p>
            </span>

            <span className="block block--2">
              <span className="block__wrapperIcon">
                <RiUserFill className="icon" />
              </span>

              <p className="block__title">
                {t('Home__section_4--blockTitleTwo')}
              </p>
              <p className="block__description">
                {t('Home__section_4--blockTitleTwoDescription')}
              </p>
            </span>

            <span className="block block--3">
              <span className="block__wrapperIcon">
                <BsFillFileEarmarkMedicalFill className="icon" />
              </span>

              <p className="block__title">
                {t('Home__section_4--blockTitleThree')}
              </p>
              <p className="block__description">
                {t('Home__section_4--blockTitleThreeDescription')}
              </p>
            </span>

            <span className="block block--4">
              <span className="block__wrapperIcon">
                <MdBusinessCenter className="icon" />
              </span>

              <p className="block__title">
                {t('Home__section_4--blockTitleFour')}
              </p>
              <p className="block__description">
                {t('Home__section_4--blockTitleFourDescription')}
              </p>
            </span>
          </div>
        </Steps>

        <Stage>
          <div className="stage__leftSide">
            <h2 className="leftSide__title">{t('Home__section_5--title')}</h2>

            <ul className="leftSide__list">
              <li className="list__item">
                <MdOutlineExplore className="item__icon" />
                {t('Home__section_5--listItemOne')}
              </li>

              <li className="list__item">
                <MdOutlineHail className="item__icon" />
                {t('Home__section_5--listItemTwo')}
              </li>

              <li className="list__item">
                <MdOutlineWorkspaces className="item__icon" />
                {t('Home__section_5--listItemThree')}
              </li>
            </ul>
          </div>

          <div className="stage__rightSide">
            <img
              src={boy_studying}
              className="rightSide__illustration"
              alt={t('Home__section_5--illustration')}
              title={t('Home__section_5--illustration')}
            />
          </div>
        </Stage>

        <Partner>
          <h3 className="partner__subtitle">
            {t('Home__section_6--subtitle')}
          </h3>
          <h2 className="partner__title">{t('Home__section_6--title')}</h2>

          <div className="logoWrapper">
            <img
              src={Google_Logo}
              className="logoWrapper__image"
              alt="Logo do google"
              title="Google"
            />

            <img
              src={Microsoft_Logo}
              className="logoWrapper__image"
              alt="Logo da Microsoft"
              title="Microsoft"
            />

            <img
              src={Ibm_Logo}
              className="logoWrapper__image"
              alt="Logo da IBM"
              title="IBM"
            />
            <img
              src={nitendo_Logo}
              className="logoWrapper__image"
              alt="Logo da Nitendo"
              title="Nitendo"
            />

            <img
              src={Unitel_Logo}
              className="logoWrapper__image"
              alt="Logo da Unitel"
              title="Unitel"
            />

            <img
              src={Lenovo_Logo}
              className="logoWrapper__image"
              alt="Logo da Lenovo"
              title="Lenovo"
            />
          </div>
        </Partner>
      </Wrapper>

      <Footer />
    </>
  )
}

export default Home
