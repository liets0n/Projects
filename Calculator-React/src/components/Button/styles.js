import styled from 'styled-components'

export const Wrapper = styled.td`
  .btn--digit {
    width: 5.313rem;
    height: 2.25rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    font-size: 1rem;
    appearance: none;
    color: ${({ theme }) => theme.colors.text};
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.grey.lighter};
    cursor: pointer;
    transition: linear 300ms;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .numbers {
    background-color: ${({ theme }) => theme.colors.grey.light};

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 762px) {
    .btn--digit {
      width: 14.5vw;
      height: 12vh;
      margin-top: 0;
      margin-right: 0;
      border-radius: 0;
    }
  }
`
