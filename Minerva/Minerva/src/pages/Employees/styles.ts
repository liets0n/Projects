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

      .control__btn {
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

        .btn__icon {
          margin-right: 1rem;
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
      margin-bottom: 1rem;
      border-radius: 1rem;
      border: thin solid ${({ theme }) => theme.colors['gray-200']};

      .employeesWrapper__column {
        width: 100%;
        height: 4.8rem;
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

        .column__line--6 {
          width: 6rem;
        }
      }

      .employeesWrapper__column--head {
        width: 100%;
        height: 3.2rem;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        background-color: ${({ theme }) => theme.colors['gray-100']};

        .column__line {
          .line__text {
            color: ${({ theme }) => theme.colors['gray-500']};
          }
        }
      }

      .employeesWrapper__column--employees {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
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

        .column__line--5 {
          height: 2.5rem;

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

        .column__line--6 {
          display: flex;
          align-items: center;

          .line__icon {
            font-size: 1.5rem;
            margin-right: 1rem;
            color: ${({ theme }) => theme.colors['gray-500']};
            cursor: pointer;

            &:last-child {
              margin-right: 0;
            }
          }

          .line__icon--subsidies:hover {
            color: ${({ theme }) => theme.colors['green-500']};
          }

          .line__icon--trash:hover {
            color: ${({ theme }) => theme.colors['red-500']};
          }

          .line__icon--show:hover {
            color: ${({ theme }) => theme.colors['yellow-600']};
          }
        }

        &:last-child {
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
        }
      }
    }
  }
`
