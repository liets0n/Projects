import styled from 'styled-components'

export const Wrapper = styled.tr`
  width: 100%;
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .column__line {
    display: flex;
    align-items: center;
    height: 100%;
    width: auto;
  }

  .column__line--1 {
    width: 1.5rem;

    .line__input {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 0.2rem;
      border: 2px solid ${({ theme }) => theme.colors['gray-500']};
    }
  }

  .column__line--2 {
    width: 16rem;

    .info {
      margin-left: 1rem;
    }
  }

  .column__line--3 {
    width: 8rem;
  }

  .column__line--4 {
    width: 9rem;
  }

  .column__line--5 {
    width: 10rem;
  }

  .column__line--6 {
    width: 7rem;
  }
`
