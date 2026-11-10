import React, { useState, useEffect } from 'react'

import {
  MdBookmark,
  MdVerified,
  MdLocationOn,
  MdAssignment,
  MdOutlineLocationOn,
  MdOutlineBusinessCenter
} from 'react-icons/md'
import { ImUsers } from 'react-icons/im'
import { TfiTimer } from 'react-icons/tfi'
import { AiFillStar } from 'react-icons/ai'
import { IoIosBusiness } from 'react-icons/io'
import { HiOutlineSearch } from 'react-icons/hi'

import publicity from './../../assets/images/publicity.jpg'
import typewriter from './../../assets/illustrations/typewriter.png'
import data_science_server from './../../assets/illustrations/data-science-server.png'

import { Wrapper, SearchField, Details, Publicity } from './styles'

import Api from '../../services/api'
import checkTime from '../../utils/time'
import { Filter, Menu } from '../../components'

const Jobs: React.FC = () => {
  const [vacancy, setVacancy] = useState<any[]>([])
  const [vacancies, setVacancies] = useState<any[]>([])
  const [searchJob, setSearchJob] = useState<string>('')
  const [options, setOptions] = useState<string>('jobs')
  const [searchLocation, setSearchLocation] = useState<string>('')
  const [filtersOfJobs, setFiltersOfJobs] = useState<string[]>([])

  const getAllJobs = async (): Promise<any> => {
    const data = await Api('/vacancies')
      .then(response => response.data)
      .catch(error => console.log(error))

    return data
  }

  const handleSaveAJob = (data: { id: number; save: boolean }): void => {
    Api.put(`/vacancies/${data.id}`, { ...data, save: !data.save })
      .then(response => response)
      .catch(error => error)
  }

  const filterVacancies = (): void => {
    void getAllJobs()
      .then(response => {
        setVacancies(
          response.filter(
            (item: { title: string; location: string }) =>
              String(item.title)
                .toLocaleLowerCase()
                .includes(searchJob.toLocaleLowerCase()) &&
              String(item.location)
                .toLocaleLowerCase()
                .includes(searchLocation.toLocaleLowerCase())
          )
        )
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    if (searchJob === '' && searchLocation === '') {
      void getAllJobs()
        .then(response => {
          setVacancies(response)
          setVacancy([response[0]])
        })
        .catch(error => console.log(error))
    } else {
      filterVacancies()
    }
  }, [searchJob, searchLocation])

  return (
    <Wrapper>
      <Menu />

      <main className="content">
        <section className="content__vacancy">
          <ul className="options">
            <li
              className={`options__item ${
                options === 'jobs' ? 'options__item--active' : ''
              }`}
              onClick={() => setOptions('jobs')}
            >
              Vagas
            </li>

            <li
              className={`options__item ${
                options === 'filters' ? 'options__item--active' : ''
              }`}
              onClick={() => setOptions('filters')}
            >
              Filtros
            </li>
          </ul>

          {options === 'jobs' ? (
            <p className="wrapper__vacanciesCount">{vacancies.length} Vagas</p>
          ) : null}

          {options === 'jobs' ? (
            vacancies.length !== 0 ? (
              <div className="vacancy__content">
                {vacancies.map(item => (
                  <div
                    className="job"
                    key={item.id}
                    onClick={() =>
                      setVacancy(
                        vacancies.filter(value => value.id === item.id)
                      )
                    }
                  >
                    <div className="vacancy__top">
                      <div className="top__leftSide">
                        <img
                          src={item.logo}
                          className="leftSide__vacancyIcon"
                          alt={item.enterpriseName}
                        />

                        <span className="leftSide__vacancyName">
                          <p className="vacancyName__change">{item.title}</p>
                          <p className="vacancyName__company">
                            {item.enterpriseName}
                          </p>
                        </span>
                      </div>

                      <MdBookmark
                        className={
                          item?.save === false
                            ? 'top__saveIcon'
                            : 'top__saveIcon top__saveIcon--saved'
                        }
                        title="Salvar"
                      />
                    </div>

                    <span className="topics">
                      {item.topics.map((item: boolean) => (
                        <p
                          className="topics__item"
                          key={String(item).concat(String(Math.random()))}
                        >
                          {item}
                        </p>
                      ))}
                    </span>

                    <span className="vacancy__footer">
                      <span className="footer__evaluation">
                        <AiFillStar className="evaluation__starIcon" />
                        <AiFillStar className="evaluation__starIcon" />
                        <AiFillStar className="evaluation__starIcon" />
                        <AiFillStar className="evaluation__starIcon" />
                        <AiFillStar className="evaluation__starIcon" />
                      </span>

                      <span className="footer__rightSide">
                        {item.verified === true ? (
                          <span className="footer__verified">
                            <MdVerified className="verified__icon" />
                            <p className="verified__text">Vaga verificada</p>
                          </span>
                        ) : null}

                        <span className="footer__time">
                          <TfiTimer className="time__icon" />

                          <p className="time__text">
                            {checkTime(item.dateCreated)}
                          </p>
                        </span>
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="vacancy vacancy--empty">
                <img
                  src={data_science_server}
                  alt="Ilustração"
                  className="vacancy__illustration"
                />
                <h1 className="vacancy__title">
                  Ops! Não foi encontrado nenhuma vaga
                </h1>
              </div>
            )
          ) : (
            <Filter setFilters={setFiltersOfJobs} filters={filtersOfJobs} />
          )}
        </section>

        <Details>
          <SearchField>
            <span className="searchField__work">
              <label htmlFor="work" className="work__label">
                <MdOutlineBusinessCenter className="icon" />
              </label>

              <input
                type="text"
                className="work__input"
                id="work"
                name="work"
                title="work"
                placeholder="Cargo"
                onChange={e => setSearchJob(e.target.value)}
              />
            </span>

            <span className="searchField__location">
              <label htmlFor="location" className="location__label">
                <MdOutlineLocationOn className="icon" />
              </label>

              <input
                type="text"
                className="location__input"
                id="location"
                name="location"
                title="location"
                placeholder="Localização"
                onChange={e => setSearchLocation(e.target.value)}
              />
            </span>

            <button
              type="button"
              className="searchField__btnSubmit"
              title="Procurar pela Vaga"
              onClick={() => filterVacancies()}
            >
              <HiOutlineSearch className="btnSubmit__icon" />
            </button>
          </SearchField>

          {vacancy[0] !== undefined ? (
            vacancy.map(item => (
              <div className="content__details" key={item?.id}>
                <div className="details__top">
                  <div className="top__leftSide">
                    <div className="leftSide__vacancyIcon">
                      <img
                        src={item?.logo}
                        className="icon"
                        alt={item?.enterpriseName}
                      />
                    </div>

                    <span className="leftSide__vacancyName">
                      <p className="vacancyName__change">
                        {item?.title}
                        <span className="vacancy__time">
                          {' '}
                          (há {checkTime(item?.dateCreated)})
                        </span>
                      </p>

                      <p className="vacancyName__company">
                        {item?.enterpriseName}
                      </p>
                    </span>
                  </div>

                  <span
                    className={
                      item?.save === false
                        ? 'top__saveIcon'
                        : 'top__saveIcon top__saveIcon--saved'
                    }
                    onClick={() => handleSaveAJob(item)}
                  >
                    <MdBookmark
                      className={
                        item?.save === false
                          ? 'saveIcon__icon'
                          : 'saveIcon__icon saveIcon__icon--saved'
                      }
                      title="Salvar"
                    />
                  </span>
                </div>

                <ul className="details__list">
                  <li className="list__item list__item--time">
                    <MdAssignment className="item__icon" />
                    {item?.contract}
                  </li>

                  <li className="list__item list__item--location">
                    <MdLocationOn className="item__icon" />
                    {item?.location}
                  </li>

                  <li className="list__item list__item--enterprise">
                    <IoIosBusiness className="item__icon" />
                    {item?.enterpriseClerk} &nbsp; <p>funcionários</p>
                  </li>

                  <li className="list__item list__item--candidate">
                    <ImUsers className="item__icon" />
                    <p>
                      {item?.candidate === 0
                        ? 'Ninguém candidatou-se ainda para esta vaga'
                        : String(item?.candidate).concat(
                            ' Pessoas já candidataram-se para esta vaga'
                          )}
                    </p>
                  </li>
                </ul>

                <div className="details__options">
                  <button type="button" className="options__btn">
                    Candidatar-se
                  </button>
                </div>

                <div className="details__description">
                  <h1 className="description__title">Sobre a vaga</h1>

                  <span className="description__business">
                    <h2 className="business__subtitle">Descrição da Empresa</h2>

                    <p className="business__text">
                      Somos um time que trabalha para transformar o nosso
                      transporte e construir processos mais eficientes entre
                      tecnologia, inteligência artificial e pessoas. Nos
                      dedicamos a melhorar a experiência e simplificar a vida
                      dos caminhoneiros, dos nossos colaboradores e dos nossos
                      clientes. Nos organizamos em squads, utilizamos
                      metodologias ágeis, somos informais, colaborativos,
                      valorizamos muito a empatia e o trabalho em equipe.
                    </p>

                    <h2 className="business__subtitle">Descrição da Vaga</h2>

                    <div className="business__text">
                      <p>
                        Esta oportunidade é para a nossa tribo Gestão de
                        Documentação. A tribo de Gestão de Documentação tem como
                        objetivo oferecer a melhor experiência para
                        operacionalização e gestão de uma viagem para nossos
                        clientes assinantes. <br /> <br />
                      </p>

                      <p>
                        Estamos no início da jornada, ainda fazendo descobertas,
                        protótipos e definições de engenharia e arquitetura.
                      </p>

                      <p>
                        Somos uma empresa 100% remota e isso significa que
                        nossos Freteiros escolhem onde preferem trabalhar.
                        <br /> <br />
                        Valorizamos ambientes diversos e por isso nossas vagas
                        são para todos. Seja muito bem-vindo/a independentemente
                        de suas características ou condições humanas quanto à
                        etnia, gênero, orientação sexual, acessibilidade,
                        cultural, social ou de qualquer outro fator.
                        <br /> <br />
                        Você tem alguma deficiência? Nossas vagas também são
                        para você. Todas elas estão abertas para pessoas com
                        deficiência (PCDs).
                        <br /> <br /> Curtiu? Vem embarcar nessa com a gente :)
                        <br /> <br /> #VemSerFrete
                      </p>
                    </div>
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="content__details content__details--empty">
              <img
                src={typewriter}
                alt="Ilustração"
                className="details__illustration"
              />
            </div>
          )}
        </Details>

        <Publicity>
          <img src={publicity} className="publicity__image" alt="Publicidade" />
        </Publicity>
      </main>
    </Wrapper>
  )
}

export default Jobs
