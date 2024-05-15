import styled from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  height: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: thin solid ${({ theme }) => theme.colors.gray['100']};

  .container {
    width: max-content;
    height: max-content;
    display: flex;
    gap: 1rem;

    .container__searchField {
      width: 33.5rem;
      height: 2.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .searchField__input {
        width: 87%;
        height: 100%;
        font-size: 1rem;
        padding: 1rem;
        border: 1px solid ${({ theme }) => theme.colors.gray['200']};
        border-right: none;
        border-top-left-radius: 2rem;
        border-bottom-left-radius: 2rem;
        background-color: transparent;
      }

      .searchField__button {
        width: 13%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${({ theme }) => theme.colors.gray['200']};
        background-color: ${({ theme }) => theme.colors.gray['100']};
        border-top-right-radius: 2rem;
        border-bottom-right-radius: 2rem;
        cursor: pointer;

        .button__icon {
          font-size: 1.3rem;
          color: ${({ theme }) => theme.colors.gray['900']};
        }

        &:hover {
          filter: brightness(0.9);
        }
      }
    }

    .container__icon {
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50rem;
      background-color: ${({ theme }) => theme.colors.gray['100']};
      cursor: pointer;

      .icon__canvas {
        font-size: 1.3rem;
      }

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  .list {
    width: max-content;
    height: max-content;
    display: flex;
    list-style: none;
    align-items: center;
    gap: 1rem;

    .list__item {
      height: 2.5rem;
      display: flex;
      list-style: none;
      align-items: center;

      .item__icon {
        font-size: 1.4rem;
        cursor: pointer;
      }

      .item__avatar {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.5rem;
        margin-left: 1rem;
        cursor: pointer;
      }
    }
  }

  .btnContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .btnContainer__btn {
      font-size: 0.875rem;
      border: none;
      cursor: pointer;
      transition: 0.4s;
    }

    .btnContainer__btn--signin {
      font-weight: 500;
      line-height: 1.75rem;
      color: ${({ theme }) => theme.colors.primary};
      background-color: transparent;

      &:hover {
        filter: brightness(0.9);
      }
    }

    .btnContainer__btn--signup {
      width: 7rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.875rem;
      font-weight: 600;
      line-height: 0.875rem;
      padding: 1.5rem;
      border-radius: 50rem;
      color: ${({ theme }) => theme.colors.gray['100']};
      background-color: ${({ theme }) => theme.colors.primary};

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`
