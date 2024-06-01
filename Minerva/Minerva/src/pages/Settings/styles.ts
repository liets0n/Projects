import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export const Content = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .settings {
    width: 100%;
    height: auto;
    border-bottom: thin solid ${({ theme }) => theme.colors['gray-200']};

    .settings__top {
      width: 100%;
      height: auto;
      padding-top: 2rem;
      padding-right: 3rem;
      padding-left: 3rem;

      .top__title {
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.75rem;
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.colors['gray-900']};
      }

      .top__subtitle {
        font-size: 1rem;
        font-weight: normal;
        color: ${({ theme }) => theme.colors['gray-700']};
      }

      .top__tabs {
        width: 100%;
        height: auto;
        display: flex;
        margin-top: 3rem;

        .tabs__item {
          font-size: 1rem;
          font-weight: 400;
          padding: 0 0.5rem;
          cursor: pointer;

          &:hover {
            filter: brightness(0.9);
          }
        }

        .tabs__item--active {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          &:after {
            content: '';
            width: 100%;
            height: 0.2rem;
            margin-top: 1rem;
            border-top-right-radius: 0.5rem;
            border-top-left-radius: 0.5rem;
            background-color: ${({ theme }) => theme.colors['gray-900']};
          }
        }
      }
    }
  }

  .configs {
    width: 100%;
    height: max-content;
    padding: 2rem 3rem;

    .configs__avatarContainer {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;

      .avatarContainer__image {
        width: 6rem;
        height: 6rem;
        padding: 0.3rem;
        object-fit: cover;
        border-radius: 50rem;
        outline: 1px solid ${({ theme }) => theme.colors['primary']};
      }

      .avatarContainer__label {
        width: 8rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        margin-left: 1.5rem;
        border-radius: 5px;
        color: ${({ theme }) => theme.colors['gray-50']};
        background-color: ${({ theme }) => theme.colors['primary']};
        cursor: pointer;
        transition: 0.5s;

        &:hover {
          filter: brightness(0.9);
        }
      }

      .avatarContainer__button {
        width: 8rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        margin-left: 0.5rem;
        border-radius: 5px;
        color: ${({ theme }) => theme.colors['primary']};
        background-color: transparent;
        transition: 5s;
        cursor: pointer;

        &:hover {
          border: 1px solid ${({ theme }) => theme.colors['primary']};
        }
      }

      .avatarContainer__input {
        display: none;
      }
    }

    .configs__wrapper {
      width: 100%;
      margin-top: 2rem;

      .wrapper__content {
        width: 100%;
        display: flex;
        flex-direction: column;

        .content__label {
          font-size: 1.5rem;
          line-height: 1.5rem;
          font-weight: 700;
          color: ${({ theme }) => theme.colors['gray-900']};
        }

        .content__input {
          width: 37rem;
          height: 3rem;
          padding: 1rem;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          border-radius: 5px;
          border: 1px solid ${({ theme }) => theme.colors['gray-500']};
          color: ${({ theme }) => theme.colors['gray-900']};
          background-color: transparent;

          &:focus-within {
            outline: 2px solid ${({ theme }) => theme.colors['primary']};
            border: none;
          }

          &:invalid {
            outline: 2px solid ${({ theme }) => theme.colors['red-300']};
            border: none;
          }
        }

        .content__messageError {
          margin-bottom: 1rem;
          color: ${({ theme }) => theme.colors['red-400']};
        }

        .content__container {
          width: 100%;
          display: flex;
          gap: 1rem;

          .container__aside {
            display: flex;
            flex-direction: column;

            .content__input {
              width: 18rem;
            }

            .content__input--password {
              width: auto;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 0;

              .input__field {
                width: 15rem;
                height: 100%;
                padding: 1rem;
                color: ${({ theme }) => theme.colors['gray-900']};
                background-color: transparent;
              }

              .input__icon {
                width: 3rem;
                font-size: 1.5rem;
                cursor: pointer;
                color: ${({ theme }) => theme.colors['gray-500']};
              }
            }
          }
        }
      }

      .wrapper__btn {
        width: 6rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        padding: 1rem;
        font-size: 1rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors['gray-50']};
        background-color: ${({ theme }) => theme.colors['primary']};
        box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
        cursor: pointer;
        transition: 0.5s;

        &:hover {
          filter: brightness(0.9);
        }

        &:disabled,
        &[disabled] {
          color: ${({ theme }) => theme.colors['gray-50']};
          background-color: ${({ theme }) => theme.colors['gray-400']};
          cursor: not-allowed;
        }
      }

      &:first-child {
        margin-top: 0;
      }
    }

    .configs__deleteAccount {
      width: 37.2rem;
      margin-top: 3rem;
      padding-top: 1rem;
      border-top: 1px solid ${({ theme }) => theme.colors['gray-300']};

      .deleteAccount__title {
        font-size: 1.5rem;
        line-height: 1.5rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors['gray-900']};
      }

      .deleteAccount__subtitle {
        width: 24rem;
        margin-top: 1rem;
        margin-bottom: 1.5rem;
        font-size: 1rem;
        font-weight: normal;
        line-height: 1.4rem;
        color: ${({ theme }) => theme.colors['gray-800']};
      }

      .deleteAccount__btn {
        width: 10rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        padding: 1rem;
        font-size: 1rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors['gray-50']};
        background-color: ${({ theme }) => theme.colors['red-300']};
        box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
        cursor: pointer;
        transition: 0.5s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`
