import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export const Content = styled.section`
  width: 100%;
  height: 100%;

  main {
    width: 100%;
    height: auto;
    padding: 1rem;

    .allDataOfPayroll {
      width: 53rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2rem;

      .allDataOfPayroll__context {
        .context__title {
          font-weight: regular;
          margin-bottom: 0.5rem;
        }

        .context__value {
          font-size: 1.3rem;
          font-weight: bold;
        }
      }
    }

    .control {
      width: 100%;
      height: max-content;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;

      .control__leftSide {
        width: max-content;
        height: auto;
        display: flex;
        align-items: center;

        .leftSide__searchField {
          width: 16rem;
          height: 3rem;
          display: flex;
          align-items: center;
          border-radius: 4rem;
          background-color: ${({ theme }) => theme.colors['gray-100']};

          .searchField__icon {
            width: 17%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            .icon__canva {
              font-size: 1rem;
            }
          }

          .searchField__input {
            width: 83%;
            height: 100%;
            color: ${({ theme }) => theme.colors['gray-900']};
            background-color: transparent;
          }
        }

        .leftSide__contractType {
          width: 10rem;
          height: 3rem;
          padding: 0.9rem;
          margin-left: 1rem;
          border-radius: 4rem;
          color: ${({ theme }) => theme.colors['gray-900']};
          background-color: transparent;
          border: thin solid ${({ theme }) => theme.colors['gray-200']};

          &:invalid {
            color: ${({ theme }) => theme.colors['gray-500']};
          }
        }
      }

      .control__buttons {
        display: flex;
        align-items: center;

        .buttons__element {
          width: 9rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          margin-left: 1rem;
          border-radius: 4rem;
          color: ${({ theme }) => theme.colors['gray-50']};
          background-color: ${({ theme }) => theme.colors['primary']};
        }

        &:first-child {
          margin-left: 1rem;
        }
      }
    }

    .employeesCounter {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      color: ${({ theme }) => theme.colors['gray-600']};
    }

    .employeesWrapper {
      width: 100%;
      height: max-content;
      display: flex;
      flex-direction: column;
      border-radius: 1rem;
      border: thin solid ${({ theme }) => theme.colors['gray-200']};

      .employeesWrapper__column {
        width: 100%;
        height: 4.8rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 1rem;
        border-top: thin solid ${({ theme }) => theme.colors['gray-200']};

        .column__line {
          display: flex;
          align-items: center;
          height: 100%;
        }

        .column__line--1 {
          width: 16rem;
        }

        .column__line--2 {
          width: 8rem;
        }

        .column__line--3 {
          width: 8rem;
        }

        .column__line--4 {
          width: 8rem;
        }

        .column__line--5 {
          width: 8rem;
        }

        .column__line--6 {
          width: 9rem;
        }

        .column__line--7 {
          width: 8rem;
        }
      }

      .employeesWrapper__column--head {
        width: 100%;
        height: 3.2rem;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        background-color: ${({ theme }) => theme.colors['gray-100']};
        border-top: none;

        .column__line {
          .line__text {
            color: ${({ theme }) => theme.colors['gray-500']};
          }
        }
      }

      .employeesWrapper__column--employees {
        .column__line {
          .line__text {
            color: ${({ theme }) => theme.colors['gray-800']};
          }
        }

        .column__line--1 {
          display: flex;
          align-items: center;

          .line__avatar {
            width: 3rem;
            height: 3rem;
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
      }

      .employeesWrapper__column--total {
        height: 3.2rem;

        .column__line--1 {
          font-size: 1.3rem;
          font-weight: 400;
        }
      }
    }

    .footer {
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1rem;
      margin-bottom: 3rem;

      .footer__amount {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;

        .amount__value {
          font-size: 1.5rem;
          font-weight: bold;
          line-height: 2rem;
        }

        .amount__text {
          margin-top: 0.3rem;
          font-weight: normal;
        }
      }
    }
  }
`
