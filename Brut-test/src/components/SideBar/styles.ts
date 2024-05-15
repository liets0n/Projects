import styled from 'styled-components'

export const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 15rem;
  height: 100vh;
  padding: 1rem;
  border-right: thin solid ${({ theme }) => theme.colors.gray['100']};

  .top {
    width: 100%;
    height: 2.5rem;
    display: flex;
    align-items: center;

    .top__menu {
      width: 1.5em;
      height: 1.5rem;
      margin-right: 0.5rem;
    }

    a,
    .top__logo {
      width: 8rem;
      height: 2rem;
    }
  }

  .navigation {
    width: 100%;
    height: 100%;
    margin-top: 2.5rem;

    .navigation__list {
      width: 100%;
      height: max-content;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
      list-style: none;

      .list__title {
        font-size: 1rem;
        font-weight: bold;
        line-height: 1.5rem;
        margin-top: 1rem;
        color: ${({ theme }) => theme.colors.gray['500']};
      }

      .list__item {
        width: 100%;
        height: auto; /* 2.5rem */
        display: flex;
        align-items: center;
        margin-top: 1rem;
        gap: 1.5rem;
        border-radius: 0.5rem;
        cursor: pointer;

        .item__icon {
          font-size: 1.5rem;
          line-height: 1.5rem;
        }

        .item__text {
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.25rem;
        }

        &:first-child {
          margin-top: 0;
        }

        &:last-child {
          margin-bottom: 1rem;
        }

        &:hover {
          .item__icon {
            color: ${({ theme }) => theme.colors.primary};
          }
        }
      }

      .list__item--activated {
        .item__icon {
          color: ${({ theme }) => theme.colors.primary};
        }
      }

      &:first-child {
        margin-top: 0;
        border-bottom: thin solid ${({ theme }) => theme.colors.gray['100']};
      }
    }
  }
`
