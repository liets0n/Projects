import styled from 'styled-components'

export const Wrapper = styled.section`
  position: absolute;
  left: 50%;
  top: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: translate(-50%, -50%);
  margin-bottom: 5rem;
  overflow: hidden;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 762px) {
    position: static;
    left: 0;
    top: 0;
    margin-bottom: 0;
    transform: translate(0, 0);
  }
`

export const Container = styled.div`
  width: 25.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.bgBlur};
  object-fit: blur(45px);

  @media (max-width: 762px) {
    position: relative;
    width: 100vw;
    height: 100vh;
    padding: 0;
    border-radius: 0;

    table {
      border-spacing: 0;
    }
  }
`

export const Display = styled.div`
  position: relative;
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 0.75rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.grey.light};
  border-radius: 5px;

  .icon {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    color: ${({ theme }) => theme.colors.grey.dark};
    cursor: pointer;
  }

  .expression {
    flex: 1;
    margin-bottom: 1rem;
    font-size: 1rem;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.grey.dark};
  }

  .result {
    width: 100%;
    height: 4.5rem;
    flex: 3;
    font-size: 2rem;
    border: none;
    color: ${({ theme }) => theme.colors.text};
    background-color: transparent;

    .b {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.text};
    }
  }

  @media (max-width: 762px) {
    height: 4.5rem;
    margin-bottom: 0.5rem;
    border-radius: 0;

    .icon {
      font-size: 2rem;
    }

    .expression {
      font-size: 2rem;
    }

    .result {
      font-size: 3rem;
    }
  }
`

export const Body = styled.tbody`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .equal,
  .delete {
    width: 5.313rem;
    height: 2.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    appearance: none;
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 5px;
    transition: linear 300ms;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .equal {
    font-size: 1.5rem;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .delete {
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 762px) {
    .equal,
    .delete {
      width: 14.5vw;
      height: 12vh;
      margin-top: 0;
      margin-right: 0;
      border-radius: 0;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`
