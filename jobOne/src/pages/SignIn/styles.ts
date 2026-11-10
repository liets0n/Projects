import styled from 'styled-components'

import Image from './../../assets/images/people_working.jpg'

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 100%;

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    height: 100%;
    padding: 2rem;

    .form__prevHistoryIcon {
      position: absolute;
      top: 1.5rem;
      left: 1.5rem;
      font-size: 2rem;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.grey[900]};
    }

    .form__title {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.grey[900]};
    }

    .form__subtitle {
      font-size: 1rem;
      font-weight: lighter;
      margin-top: 0.5rem;
      color: ${({ theme }) => theme.colors.grey[600]};
    }

    .form__field {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-top: 1.5rem;

      .field__label {
        font-size: 1rem;
        font-weight: 100;
        margin-bottom: 0.2rem;
        color: ${({ theme }) => theme.colors.grey[600]};
      }

      .field__input {
        font-size: 1rem;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid ${({ theme }) => theme.colors.grey[300]};
        color: ${({ theme }) => theme.colors.grey[700]};
        background-color: transparent;
      }

      .field__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 3.25rem;
        border-radius: 0.5rem;
        border: 1px solid ${({ theme }) => theme.colors.grey[300]};

        .wrapper__input {
          width: 100%;
          height: 100%;
          border: none;
        }

        .wrapper__icon {
          font-size: 1.5rem;
          margin-right: 1rem;
          color: ${({ theme }) => theme.colors.grey[600]};
          cursor: pointer;
        }
      }
    }

    .form__wrapper {
      display: flex;
      justify-content: space-between;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;

      .wrapper__checkField {
        display: flex;
        align-items: center;
        justify-content: center;

        .checkField__label {
          color: ${({ theme }) => theme.colors.grey[600]};
        }

        .checkField__input {
          margin-right: 0.5rem;
        }
      }

      .wrapper__forgotPassword {
        text-decoration: none;
        text-transform: none;
        color: ${({ theme }) => theme.colors.grey[600]};
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .form__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3.5rem;
      font-size: 1rem;
      padding: 1rem;
      border: none;
      border-radius: 0.5rem;
      appearance: none;
      cursor: pointer;

      .btn__image {
        width: 1.5rem;
        margin-right: 2rem;
      }

      &:hover {
        border: none;
        filter: brightness(0.9);
      }
    }

    .form__btn--submit {
      margin-top: 0;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary};
      transition: 200ms;

      &:hover {
        filter: brightness(0.9);
      }
    }

    .form__btn--google {
      margin-top: 1rem;
      border: none;
      color: ${({ theme }) => theme.colors.grey[900]};
      background-color: ${({ theme }) => theme.colors.grey[100]};
    }

    .form__btn--linkdin {
      margin-top: 1rem;
      border: none;
      color: ${({ theme }) => theme.colors.grey[900]};
      background-color: ${({ theme }) => theme.colors.grey[100]};
    }

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1.5rem;
      color: ${({ theme }) => theme.colors.grey[900]};

      a {
        text-decoration: none;
        text-transform: none;
        margin-left: 0.5rem;
        color: ${({ theme }) => theme.colors.grey[400]};
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`

export const RightSide = styled.div`
  width: 50%;
  height: 100vh;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`
