import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 20rem;
  height: 24.6rem;
  display: ${({ show }) => (show === true ? 'block' : 'none')};
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.35);
  background-color: ${({ theme }) => theme.colors.bgDark};
  object-fit: blur(45px);
  padding: 2rem;
  font-size: 1.5rem;
  animation: animation;
  animation-duration: 1s;
  overflow: auto;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2rem;

    .header__title {
      font-size: 1.5rem;
    }

    .header__icon {
      display: none;
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.white};
      cursor: pointer;
    }
  }

  .list {
    .list__item {
      font-size: 1rem;
      list-style: none;
      margin-top: 0.5rem;

      &:last-child {
        margin-bottom: 2rem;
      }
    }
  }

  .btn--delete {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 20rem;
    height: 3rem;
    font-size: 1rem;
    padding: 0.5rem;
    border: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    appearance: none;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      filter: brightness(0.8);
    }

    &:active {
      filter: brightness(0.1);
    }
  }

  @keyframes animation {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(0%);
    }
  }

  @media (max-width: 762px) {
    position: absolute;
    width: 100vw;
    height: 100%;
    border-radius: 0;

    .header {
      .header__icon {
        display: block;
      }
    }

    .btn--delete {
      width: 100vw;
      border-radius: 0;
    }
  }
`
