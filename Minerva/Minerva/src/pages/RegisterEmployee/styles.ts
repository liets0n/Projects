import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  main {
    width: 100%;
    height: 100%;
    padding: 1rem;

    .title {
      display: flex;
      font-size: 1.5rem;
      font-weight: normal;

      .title__icon {
        margin-right: 1rem;
        cursor: pointer;
      }
    }

    form {
      width: max-content;
      height: max-content;
      margin-top: 2rem;

      .avatarContainer {
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

      .fields {
        display: flex;
        margin-top: 1rem;

        .field__content {
          display: flex;
          flex-direction: column;

          .content__label {
            color: ${({ theme }) => theme.colors['gray-600']};

            .label__obligationSign {
              color: ${({ theme }) => theme.colors['red-300']};
            }
          }

          .content__input,
          .content__select {
            width: 18rem;
            height: 3rem;
            padding: 1rem;
            margin-top: 0.5rem;
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

          .content__select {
            padding: 0.5rem;
          }

          .content__messageError {
            margin-top: 0.8rem;
            color: ${({ theme }) => theme.colors['red-200']};
          }

          &:first-child {
            margin-right: 1rem;
          }
        }

        &:first-child {
          margin: 0;
        }
      }

      .btn {
        width: 18rem;
        height: 3.125rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 5px;
        color: ${({ theme }) => theme.colors['gray-50']};
        background-color: ${({ theme }) => theme.colors['primary']};
        cursor: pointer;
        transition: 0.5s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`
