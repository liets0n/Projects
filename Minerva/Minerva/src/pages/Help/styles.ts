import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  .container {
    width: 100%;
    height: 100%;
    padding: 1rem;

    .container__welcome {
      line-height: 2rem;

      .welcome__title {
        font-size: 1.5rem;
        font-weight: normal;

        .title__emoji {
          margin-left: 0.4rem;
        }
      }

      .welcome__subtitle {
        font-size: 1rem;
        font-weight: normal;
        color: ${({ theme }) => theme.colors['gray-500']};
      }
    }

    .container__context {
      width: 100%;
      height: auto;

      .context__top {
        display: flex;
        margin-top: 1rem;
        gap: 1rem;

        .top__chart {
          width: 70%;
          height: 24rem;
          padding: 1rem;
          border-radius: 8px;
          background-color: ${({ theme }) => theme.colors['gray-100']};

          .chart__top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;

            .top__title {
              font-size: 1.5rem;
              font-weight: 500;
            }

            .chart__year {
              padding: 0.5rem;
              border-radius: 5rem;
            }
          }
        }

        .top__data {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .data__container {
            width: 19.5rem;
            height: 7rem;
            padding: 1rem;
            margin-top: 1.5rem;
            color: thin solid ${({ theme }) => theme.colors['gray-900']};
            background-color: ${({ theme }) => theme.colors['gray-100']};
            border-radius: 8px;

            .container__title {
              display: flex;
              align-items: center;
              justify-content: flex-start;

              .title__icon {
                margin-right: 0.5rem;
              }

              .title__text {
              }
            }

            .container__value {
              font-size: 2rem;
              font-weight: bolder;
              margin-top: 1.5rem;
            }

            &:first-child {
              margin: 0;
            }
          }
        }
      }
    }

    .context__employees {
      width: 100%;
      height: max-content;
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      border-radius: 8px;
      background-color: ${({ theme }) => theme.colors['gray-100']};

      .employeesWrapper__column {
        width: 100%;
        height: 3.5rem;
        display: flex;
        align-items: center;
        justify-content: space-around;

        .column__line {
          display: flex;
          align-items: center;
          height: 100%;
          width: auto;
        }

        .column__line--1 {
          width: 16rem;
          border-top: none;
        }

        .column__line--2 {
          width: 8rem;
        }

        .column__line--3 {
          width: 9rem;
        }

        .column__line--4 {
          width: 10rem;
        }

        .column__line--5 {
          width: 7rem;
        }
      }

      .employeesWrapper__column--head {
        width: 100%;
        height: 3rem;

        .column__line {
          .line__text {
            color: ${({ theme }) => theme.colors['gray-500']};
          }
        }
      }

      .employeesWrapper__column--employees {
        border-top: thin solid ${({ theme }) => theme.colors['gray-200']};

        .column__line {
          .line__text {
            color: ${({ theme }) => theme.colors['gray-800']};
          }
        }

        .column__line--1 {
          display: flex;
          align-items: center;

          .line__avatar {
            width: 2rem;
            height: 2rem;
            margin-right: 1rem;
            object-fit: cover;
            border-radius: 50rem;
            background-color: ${({ theme }) => theme.colors['gray-200']};
          }

          .info {
            display: block;
            line-height: 1.34rem;

            .line__text--position {
              color: ${({ theme }) => theme.colors['gray-600']};
            }
          }
        }

        .column__line--5 {
          height: 2rem;

          .line__text {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 2rem;
          }

          .line__text--success {
            color: ${({ theme }) => theme.colors['green-300']};
            background-color: ${({ theme }) => theme.colors['green-50']};
          }

          .line__text--warn {
            color: ${({ theme }) => theme.colors['yellow-700']};
            background-color: ${({ theme }) => theme.colors['yellow-50']};
          }

          .line__text--error {
            color: ${({ theme }) => theme.colors['red-300']};
            background-color: ${({ theme }) => theme.colors['red-50']};
          }
        }
      }
    }
  }
`
