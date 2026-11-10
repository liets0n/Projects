import styled from 'styled-components'

import Image from './../../../assets/images/people_working.jpg'

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
    }

    .form__title {
      font-size: 2rem;
    }

    .form__subtitle {
      font-size: 1rem;
      font-weight: lighter;
      margin-top: 0.5rem;
      color: ${({ theme }) => theme.colors.grey[600]};
    }

    .form__emailField {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-top: 2rem;

      .emailField__label {
        font-size: 1rem;
        font-weight: 100;
        margin-bottom: 0.2rem;
      }

      .emailField__input {
        font-size: 1rem;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid ${({ theme }) => theme.colors.grey[300]};
        color: ${({ theme }) => theme.colors.grey[700]};
        background-color: transparent;
      }
    }

    .form__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3.5rem;
      font-size: 1rem;
      padding: 1rem;
      margin-top: 2rem;
      border: none;
      border-radius: 0.5rem;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary};
      appearance: none;
      cursor: pointer;
      transition: 200ms;

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
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
