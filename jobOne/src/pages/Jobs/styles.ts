import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grey[100]};

  .content {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 3fr 5fr 2fr;
    gap: 1rem;
    padding: 2rem;
    padding-bottom: 0;
    margin-top: 3.25rem;

    .content__vacancy {
      width: 100%;
      height: 54rem;

      .options {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 4rem;
        padding: 0.5rem;
        margin-right: 1rem;
        border-radius: 0.5rem;
        background-color: ${({ theme }) => theme.colors.background};

        .options__item {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 90%;
          height: 99%;
          font-size: 1.2rem;
          list-style: none;
          text-decoration: none;
          text-transform: none;
          margin-right: 1rem;
          border-radius: 0.3rem;
          cursor: pointer;
          transition: ease 400ms;
          color: ${({ theme }) => theme.colors.grey[900]};

          &:last-child {
            margin-right: 0;
          }

          &:hover {
            background-color: ${({ theme }) => theme.colors.grey[100]};
          }
        }

        .options__item--active {
          background-color: ${({ theme }) => theme.colors.grey[200]};
        }
      }

      .wrapper__vacanciesCount {
        font-weight: lighter;
        font-style: italic;
        margin-top: 1rem;
        margin-left: 1rem;
        color: ${({ theme }) => theme.colors.grey[900]};
      }

      .vacancy__content {
        width: 100%;
        height: 46.5rem;
        margin-top: 1rem;
        overflow: auto;

        .job {
          width: 100%;
          height: max-content;
          padding: 1rem;
          margin-top: 1rem;
          margin-right: 1rem;
          border: 1px solid ${({ theme }) => theme.colors.grey[50]};
          border-radius: 1rem;
          background-color: ${({ theme }) => theme.colors.background};
          box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
            rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
          cursor: pointer;

          .vacancy__top {
            width: 100%;
            display: flex;
            justify-content: space-between;

            .top__leftSide {
              display: flex;
              align-items: center;
              justify-content: center;

              .leftSide__vacancyIcon {
                width: 3rem;
              }

              .leftSide__vacancyName {
                display: flex;
                justify-content: center;
                flex-direction: column;
                line-height: 1.75rem;
                margin-left: 1rem;

                .vacancyName__change {
                  font-size: 1.5rem;
                  font-weight: 700;
                  color: ${({ theme }) => theme.colors.grey[900]};
                }

                .vacancyName__company {
                  font-size: 1rem;
                  color: ${({ theme }) => theme.colors.grey[600]};
                }
              }
            }

            .top__saveIcon {
              font-size: 1.5rem;
              color: ${({ theme }) => theme.colors.grey[400]};
            }

            .top__saveIcon--saved {
              color: ${({ theme }) => theme.colors.primary};
            }
          }

          .topics {
            width: 100%;
            display: flex;
            align-items: center;
            margin-top: 1rem;

            .topics__item {
              width: max-content;
              font-size: 0.75rem;
              padding: 0.5rem;
              margin-right: 0.5rem;
              border-radius: 0.5rem;
              color: ${({ theme }) => theme.colors.grey[500]};
              background-color: ${({ theme }) => theme.colors.grey[100]};

              &:first-child {
                color: rgb(72, 61, 139);
                background-color: rgb(198, 190, 250);
              }

              &:nth-child(2) {
                color: rgb(165, 42, 42);
                background-color: rgb(243, 198, 198);
              }

              &:nth-child(3) {
                color: rgb(49, 190, 143);
                background-color: rgb(204, 245, 231);
              }

              &:nth-child(5) {
                color: rgb(70, 130, 180);
                background-color: rgb(171, 204, 231);
              }

              &:last-child {
                margin-right: 0;
              }
            }
          }

          .vacancy__footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin-top: 1rem;

            .footer__evaluation {
              .evaluation__starIcon {
                font-size: 1.5rem;
                color: ${({ theme }) => theme.colors.yellow[300]};
              }
            }

            .footer__rightSide {
              display: flex;
              align-items: center;
              justify-content: center;

              .footer__verified {
                display: flex;
                align-items: center;
                justify-content: center;

                .verified__icon {
                  font-size: 1.7rem;
                  color: ${({ theme }) => theme.colors.blue[600]};
                }

                .verified__text {
                  margin-right: 1rem;
                  margin-left: 0.5rem;
                  color: ${({ theme }) => theme.colors.grey[600]};
                }
              }

              .footer__time {
                display: flex;
                align-items: center;
                color: ${({ theme }) => theme.colors.grey[900]};

                .time__text {
                  margin-left: 0.5rem;
                  color: ${({ theme }) => theme.colors.grey[600]};
                }
              }
            }
          }

          &:first-child {
            margin-top: 0;
          }
        }
      }

      .vacancy--empty {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .vacancy__illustration {
          width: 10rem;
        }

        .vacancy__title {
          font-size: 1.5rem;
        }
      }
    }
  }
`

export const SearchField = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  border-radius: 0.5rem;

  .searchField__work {
    display: flex;
    align-items: center;
    width: 45%;
    height: 4rem;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.background};

    .work__label {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      margin-left: 1rem;

      .icon {
        font-size: 1.5rem;
        margin-left: 1rem;
        color: ${({ theme }) => theme.colors.grey[900]};
      }
    }

    .work__input {
      width: 100%;
      height: 100%;
      padding: 1rem;
      border: none;
      font-size: 1.1rem;
      color: ${({ theme }) => theme.colors.grey[600]};
      background-color: ${({ theme }) => theme.colors.background};
    }

    &::after {
      content: '';
      width: 4.5rem;
      height: 0.5px;
      background-color: ${({ theme }) => theme.colors.grey[200]};
      transform: rotate(90deg);
    }
  }

  .searchField__location {
    display: flex;
    align-items: center;
    width: 45%;
    height: 4rem;
    background-color: ${({ theme }) => theme.colors.background};

    .location__label {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      margin-left: 1rem;

      .icon {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.grey[900]};
      }
    }

    .location__input {
      width: 100%;
      height: 100%;
      font-size: 1.1rem;
      padding: 1rem;
      border: none;
      color: ${({ theme }) => theme.colors.grey[600]};
      background-color: ${({ theme }) => theme.colors.background};
    }
  }

  .searchField__btnSubmit {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    height: 100%;
    padding: 1rem;
    border: none;
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
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`

export const Details = styled.section`
  width: 100%;
  height: 54rem;

  .content__details {
    width: 100%;
    height: 49rem;
    padding: 2rem;
    margin-top: 1rem;
    margin-right: 2rem;
    border: 1px solid ${({ theme }) => theme.colors.grey[50]};
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    overflow: auto;

    .details__top {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .top__leftSide {
        display: flex;
        align-items: center;
        justify-content: center;

        .leftSide__vacancyIcon {
          width: 3rem;

          .icon {
            width: 100%;
            height: 100%;
          }
        }

        .leftSide__vacancyName {
          display: flex;
          justify-content: center;
          flex-direction: column;
          line-height: 1.75rem;
          margin-left: 1rem;
          color: ${({ theme }) => theme.colors.grey[900]};

          .vacancyName__change {
            font-size: 1.5rem;
            font-weight: 700;

            .vacancy__time {
              font-size: 1rem;
              font-weight: normal;
              color: ${({ theme }) => theme.colors.grey[400]};
            }
          }

          .vacancyName__company {
            font-size: 1rem;
            color: ${({ theme }) => theme.colors.grey[600]};
          }
        }
      }

      .top__saveIcon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        padding: 0.5rem;
        margin-top: 0.1rem;
        border: thin solid ${({ theme }) => theme.colors.grey[100]};
        border-radius: 0.5rem;
        transition: ease 200ms;

        .saveIcon__icon {
          font-size: 8rem;
          color: ${({ theme }) => theme.colors.grey[400]};
        }

        .saveIcon__icon--saved {
          color: ${({ theme }) => theme.colors.primary};
        }

        &:hover {
          box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
            rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
          cursor: pointer;
        }
      }

      .top__saveIcon--saved {
        background-color: ${({ theme }) => theme.colors.grey[50]};
      }
    }

    .details__list {
      width: 100%;
      height: max-content;
      margin-top: 2rem;

      .list__item {
        display: flex;
        align-items: center;
        list-style: none;
        text-decoration: none;
        text-transform: none;
        margin-top: 0.75rem;
        color: ${({ theme }) => theme.colors.grey[600]};

        .item__icon {
          font-size: 1.5rem;
          margin-right: 0.5rem;
          color: ${({ theme }) => theme.colors.grey[900]};
        }

        &:first-child {
          margin-top: 0;
        }
      }
    }

    .details__options {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-top: 2rem;

      .options__btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 9rem;
        height: 3.5rem;
        font-size: 1rem;
        padding: 1rem;
        border: none;
        border-radius: 0.5rem;
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.primary};
        appearance: none;
        cursor: pointer;
        transition: ease 200ms;

        &:hover {
          background-color: ${({ theme }) => theme.colors.secondary};
        }
      }
    }

    .details__description {
      margin-top: 2rem;
      color: ${({ theme }) => theme.colors.grey[600]};

      .description__title {
        font-size: 1.5rem;
      }

      .description__business {
        display: block;
        margin-top: 1rem;

        .business__subtitle {
          font-size: 1rem;
          margin-top: 1rem;
        }

        .business__text {
          margin-top: 1rem;
        }
      }
    }
  }

  .content__details--empty {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .details__illustration {
      width: 15rem;
      margin-bottom: 2.5rem;
    }
  }
`

export const Publicity = styled.section`
  width: 100%;
  height: 54rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.background};

  .publicity__image {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    object-fit: cover;
  }
`
