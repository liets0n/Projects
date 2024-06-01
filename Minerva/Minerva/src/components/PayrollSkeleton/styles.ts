import styled from 'styled-components'

export const Wrapper = styled.div`
  tr {
    width: 100%;
    height: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;

    .column__line {
      display: flex;
      align-items: center;
      height: 100%;
      width: auto;
    }

    .column__line--1 {
      width: 16rem;

      .info {
        margin-left: 0.5rem;
      }
    }

    .column__line--2 {
      width: 8rem;
    }

    .column__line--3 {
      width: 8rem;
    }

    .column__line--4 {
      width: 8rem;
    }

    .column__line--5 {
      width: 8rem;
    }

    .column__line--6 {
      width: 9rem;
    }

    .column__line--7 {
      width: 8rem;
    }
  }
`
