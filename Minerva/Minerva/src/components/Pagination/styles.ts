import Styled from 'styled-components'

export const Wrapper = Styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;

  .list {
    width: 2.5rem;
    height: 2.5rem;

    .list__item {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.2rem;
      color: ${({ theme }) => theme.colors['gray-500']};
      background-color: transparent;

      &:hover {
        background-color: ${({ theme }) => theme.colors['gray-200']};
      }

      &[disabled] {
        cursor: not-allowed;
      }
    }

    .list__item--active {
      color: ${({ theme }) => theme.colors['gray-50']};
      background-color: ${({ theme }) => theme.colors['primary']};

      &:hover {
        background-color: ${({ theme }) => theme.colors['primary']};
        filter: brightness(0.9);
      }
    }
  }
`
