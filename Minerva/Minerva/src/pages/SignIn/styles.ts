import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .logo {
    position: absolute;
    top: 1rem;
    left: 2rem;
    width: 10rem;
  }

  form {
    width: 24rem;
    height: max-content;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: ${({ theme }) =>
        theme.name === 'dark' ? 'rgba(4, 4, 4, 0.2)' : 'rgba(99, 99, 99, 0.2)'}
      0px 2px 8px 0px;

    .title {
      font-size: 1.5rem;
      line-height: 1.5rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors['gray-900']};
    }

    .subtitle {
      width: 16rem;
      margin-top: 1rem;
      font-size: 1rem;
      font-weight: normal;
      line-height: 1.4rem;
      color: ${({ theme }) => theme.colors['gray-800']};
    }

    .fields {
      display: flex;
      flex-direction: column;
      margin-top: 1.5rem;
      margin-bottom: 1rem;

      .fields__context {
        display: flex;
        flex-direction: column;

        .context__input {
          width: 100%;
          height: 3rem;
          padding: 1rem;
          margin-top: 0.5rem;
          border-radius: 5px;
          border: 1px solid ${({ theme }) => theme.colors['gray-500']};
          color: ${({ theme }) => theme.colors['gray-900']};
          background-color: transparent;

          &:focus-within {
            outline: 2px solid ${({ theme }) => theme.colors['primary']};
            border: none;
          }
        }

        .label__obligationSign {
          margin-left: 0.3rem;
          color: ${({ theme }) => theme.colors['red-300']};
        }

        .context__messageError {
          margin-top: 0.5rem;
          color: ${({ theme }) => theme.colors['red-400']};
        }
      }

      .fields__context--password {
        margin-top: 2rem;

        .context__label {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .label__forgotPassword {
            color: ${({ theme }) => theme.colors['primary']};

            &:hover {
              text-decoration: underline;
            }
          }
        }

        .context__input {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0rem;

          .input__field {
            height: 100%;
            width: 85%;
            padding: 1rem;
            color: ${({ theme }) => theme.colors['gray-900']};
            background-color: transparent;
          }

          .input__icon {
            width: 15%;
            font-size: 1.5rem;
            color: ${({ theme }) => theme.colors['gray-500']};
            cursor: pointer;
          }
        }
      }
    }

    .btn {
      width: 100%;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      padding: 1rem;
      margin-top: 1.5rem;
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
    }
  }

  .footer {
    margin-top: 2rem;
  }
`
