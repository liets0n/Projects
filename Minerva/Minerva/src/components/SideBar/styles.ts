import styled from 'styled-components'

export const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  bottom: 0;
  width: 14rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border-right: thin solid ${({ theme }) => theme.colors['gray-200']};

  .navigation {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    a {
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: ${({ theme }) => theme.colors['gray-800']};
    }

    .navigation__item--label {
      margin-left: 1rem;
      font-size: 0.75rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors['gray-400']};
    }

    .navigation__item {
      width: 12.75rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      padding: 1rem;
      margin-top: 0.5rem;
      border-radius: 0.3rem;
      transition: background-color 0.5s;
      cursor: pointer;

      .item__icon {
        width: 1.25rem;
        height: 1.25rem;
        margin-right: 1rem;
        font-size: 1.25rem;
        color: ${({ theme }) => theme.colors['gray-700']};
      }

      .item__text {
        font-size: 0.875rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors['gray-700']};
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors['gray-200']};
      }
    }

    .navigation__item--selected {
      transition: background-color 0;

      .item__text,
      .item__icon {
        font-weight: 600;
        color: ${({ theme }) => theme.colors['gray-50']};
      }

      background-color: ${({ theme }) => theme.colors['primary']};

      &:hover {
        filter: brightness(0.9);
        background-color: ${({ theme }) => theme.colors['primary']};
      }
    }

    .navigation--support {
      margin-top: 1rem;
    }
  }

  .navigation--bottom {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    border-top: thin solid ${({ theme }) => theme.colors['gray-200']};

    .context__leftSide {
      display: flex;
      align-items: center;
      margin-top: 1rem;

      .leftSide__avatar {
        width: 2.5rem;
        height: 2.5rem;
        margin-right: 0.5rem;
        border-radius: 50rem;
        background-color: ${({ theme }) => theme.colors['gray-200']};
      }

      .leftSide__data {
        line-height: 1.2rem;

        .data__name {
          font-size: 0.875rem;
        }

        .data__charge {
          font-size: 0.875rem;
          color: ${({ theme }) => theme.colors['gray-500']};
        }
      }
    }

    .context__rightSide {
      margin-top: 1rem;
      margin-left: 1.5rem;

      .rightSide__icon {
        font-size: 1.2rem;
        cursor: pointer;
        color: ${({ theme }) => theme.colors['gray-700']};
      }
    }
  }
`
