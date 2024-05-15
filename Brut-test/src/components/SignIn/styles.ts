import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: ${props => (props.hidden === true ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 512;
`

export const Container = styled.div`
  position: relative;
  width: 25rem;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0.5rem;
  padding: 1rem;
  z-index: 1024;
  background-color: ${({ theme }) => theme.colors.gray['50']};

  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .logo {
    width: 8rem;
    margin-bottom: 1.5rem;
  }

  form {
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .btn,
    .field__fieldContainer {
      width: 20rem;
      height: 3.25rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      font-size: 1rem;
      font-weight: 400;
      border: none;
      border-radius: 4px;
    }

    .field {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-top: 1rem;

      .field__label {
        width: max-content;
        height: max-content;
      }

      .field__fieldContainer {
        margin-top: 0.5rem;
        border: 1px solid ${({ theme }) => theme.colors.gray['200']};

        .fieldContainer__input {
          width: 100%;
          height: 100%;
          font-size: 1rem;
          font-weight: 400;
          border: none;
          border-radius: 4px;
        }

        .fieldContainer__icon {
          font-size: 1.5rem;
          cursor: pointer;
        }
      }

      &:first-child {
        margin-top: 0;
      }
    }

    .btn {
      display: flex;
      align-items: center;
      margin-top: 1.5rem;
      color: #fff;
      background-color: ${({ theme }) => theme.colors.primary};
      cursor: pointer;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  .separator {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.75rem;
    font-weight: 500;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.gray['500']};

    &::after,
    &::before {
      content: '';
      width: 8.3rem;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.gray['200']};
    }
  }

  .btnContainer {
    width: 20rem;
    height: 3.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    gap: 1rem;

    .btnContainer__btn {
      width: 20%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      font-size: 0.875rem;
      font-weight: 100;
      display: flex;
      justify-content: center;
      border: none;
      border-radius: 4px;
      border: 1px solid ${({ theme }) => theme.colors.gray['200']};
      color: ${({ theme }) => theme.colors.gray['600']};
      background-color: transparent;
      gap: 1rem;
      cursor: pointer;

      .icon {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.gray['900']};
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.gray['100']};
      }

      &:first-child {
        width: 80%;
      }
    }
  }

  .account {
    font-size: 1rem;
    font-weight: 400;
    margin-top: 1rem;

    .account__emphasis {
      color: ${({ theme }) => theme.colors.primary};
      cursor: pointer;
    }
  }
`
