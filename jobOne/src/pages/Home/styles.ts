import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: max-content;
`

export const Menu = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: max-content;

  .menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 75%;
    height: 5rem;

    .menu__title {
      display: flex;
      align-items: center;
      justify-content: center;
      width: max-content;
      height: 100%;
      font-size: 2rem;

      .title__link {
        text-decoration: none;
        text-transform: none;
        color: ${({ theme }) => theme.colors.grey[800]};
      }
    }

    .Menu__btnWrapper {
      display: flex;

      .btnWrapper__item {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        padding: 1rem;
        margin-right: 1rem;
        border: none;
        border-radius: 0.5rem;
        transition: ease 200ms;
        cursor: pointer;

        &:last-child {
          margin: 0;
        }
      }

      .btnWrapper__item--signIn {
        color: ${({ theme }) => theme.colors.grey[900]};
        background-color: ${({ theme }) => theme.colors.grey[100]};

        &:hover {
          background-color: ${({ theme }) => theme.colors.grey[200]};
        }
      }

      .btnWrapper__item--signUp {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.primary};

        &:hover {
          background-color: ${({ theme }) => theme.colors.secondary};
        }
      }
    }
  }
`

export const Intro = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  height: 100%;
  margin-top: 6rem;

  .top__leftSide {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .leftSide__title {
      width: 35rem;
      font-size: 5rem;
      color: ${({ theme }) => theme.colors.grey[900]};
    }

    .leftSide__description {
      width: 34rem;
      font-size: 1.2rem;
      margin-top: 2rem;
      color: ${({ theme }) => theme.colors.grey[600]};
    }
  }

  .top__rightSide {
    .rightSide__illustrations {
      width: 35rem;
    }
  }
`

export const SearchField = styled.div`
  display: flex;
  margin-top: 1.5rem;

  .searchField__work {
    display: flex;
    align-items: center;
    width: 15rem;
    height: 4rem;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.grey[100]};

    .work__label {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      margin-left: 1rem;

      .work__icon {
        font-size: 1.5rem;
        margin-left: 1rem;
        color: ${({ theme }) => theme.colors.grey[800]};
      }
    }

    .work__input {
      width: 100%;
      height: 100%;
      font-size: 1rem;
      padding: 1rem;
      border: none;
      color: ${({ theme }) => theme.colors.grey[700]};
      background-color: ${({ theme }) => theme.colors.grey[100]};
    }

    &::after {
      content: '';
      width: 1px;
      height: 2.5rem;
      background-color: ${({ theme }) => theme.colors.grey[300]};
    }
  }

  .searchField__location {
    display: flex;
    align-items: center;
    width: 13.9rem;
    height: 4rem;
    background-color: ${({ theme }) => theme.colors.grey[100]};

    .location__label {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      margin-left: 1rem;

      .location__icon {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.grey[800]};
      }
    }

    .location__input {
      width: 100%;
      height: 100%;
      font-size: 1rem;
      padding: 1rem;
      border: none;
      color: ${({ theme }) => theme.colors.grey[700]};
      background-color: ${({ theme }) => theme.colors.grey[100]};
    }
  }

  .searchField__btnSubmit {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    border: none;
    padding-top: 1rem;
    padding-right: 1.7rem;
    padding-bottom: 1rem;
    padding-left: 1.7rem;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    appearance: none;
    transition: ease 500ms;

    .btnSubmit__icon {
      font-size: 1.6rem;
      margin-right: 0.5rem;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
      cursor: pointer;
    }
  }
`

export const Vacancies = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 75%;
  height: max-content;
  margin-top: 14rem;

  .vacancies__title {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.grey[900]};
  }

  .vacancies__subtitle {
    font-size: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.grey[600]};
  }

  .vacanciesPost {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .vacanciesPost__column {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
export const Motive = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 75%;
  padding: 3rem;
  margin-top: 7rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};

  .motive__leftSide {
    display: flex;
    justify-content: center;
    flex-direction: column;

    .leftSide__title {
      width: 25rem;
      font-size: 3rem;
    }

    .leftSide__description {
      width: 29rem;
      line-height: 1.4rem;
      margin-top: 1rem;
    }

    .leftSide__list {
      font-size: 1.2rem;
      line-height: 2rem;
      list-style: none;
      margin-top: 2rem;

      .list__item {
        display: flex;
        align-items: center;

        .item__icon {
          margin-right: 1rem;
        }
      }
    }
  }

  .motive__rightSide {
    .leftSide__illustrations {
      width: 30rem;
    }
  }
`
export const Steps = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 75%;
  height: max-content;
  margin-top: 7rem;

  .steps__title {
    width: 46rem;
    font-size: 3rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.grey[900]};
  }

  .steps__subtitle {
    font-size: 1rem;
    text-align: center;
    margin-top: 1.5rem;
    color: ${({ theme }) => theme.colors.grey[600]};
  }

  .steps__blocks {
    display: flex;
    margin-top: 8rem;

    .block {
      width: 16.125rem;
      height: 16.063rem;
      padding: 1.5rem;
      margin-right: 2rem;
      border-radius: 0.5rem;

      .block__wrapperIcon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.8rem;
        height: 2.8rem;
        border-radius: 50rem;
        color: ${({ theme }) => theme.colors.grey[500]};
        background-color: ${({ theme }) => theme.colors.grey[200]};

        .wrapperIcon__icon {
          font-size: 1.5rem;
        }
      }

      .block__title {
        font-size: 1.3rem;
        margin-top: 2rem;
        color: ${({ theme }) => theme.colors.grey[800]};
      }

      .block__description {
        font-size: 1.1rem;
        line-height: 1.8rem;
        margin-top: 1rem;
        color: ${({ theme }) => theme.colors.grey[600]};
      }
    }

    .block--1 {
      background-color: ${({ theme }) => theme.colors.primary};

      .block__wrapperIcon {
        background-color: ${({ theme }) => theme.colors.white};

        .wrapperIcon__icon {
          color: ${({ theme }) => theme.colors.primary};
        }
      }

      .block__title {
        color: ${({ theme }) => theme.colors.white};
      }

      .block__description {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`

export const Stage = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 75%;
  height: max-content;
  margin-top: 7rem;

  .stage__leftSide {
    .leftSide__title {
      width: 32rem;
      font-size: 3rem;
      color: ${({ theme }) => theme.colors.grey[900]};
    }

    .leftSide__list {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 2rem;
      color: ${({ theme }) => theme.colors.grey[800]};

      .list__item {
        display: flex;
        justify-content: flex-start;
        width: 36rem;
        list-style: none;
        margin-top: 1.5rem;

        .item__icon {
          font-size: 2rem;
          margin-right: 1.5rem;
        }
      }
    }
  }

  .stage__rightSide {
    .rightSide__illustration {
      width: 30rem;
    }
  }
`

export const Partner = styled.section`
  width: 75%;
  height: max-content;
  margin-top: 7rem;

  .partner__subtitle {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.grey[600]};
  }

  .partner__title {
    width: 24rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.grey[900]};
  }

  .logoWrapper {
    display: flex;
    align-items: center;

    .logoWrapper__image {
      width: 8.063rem;
      margin-right: 4rem;
    }
  }
`
