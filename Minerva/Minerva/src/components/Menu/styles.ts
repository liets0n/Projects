import styled from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  height: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  .logo {
    width: 7rem;
  }

  .menu {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;

    .menu__item {
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50rem;
      transition: background-color 0.5s;
      cursor: pointer;

      .item__icon {
        font-size: 1.25rem;
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors['gray-100']};
      }
    }

    .menu__item--avatar {
      width: auto;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 1rem;
      cursor: pointer;

      .item__avatar {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50rem;
        background-color: ${({ theme }) => theme.colors['gray-200']};
      }
    }
  }
`
