import styled from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.bgBlur};
  object-fit: blur(5px);

  .menu {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .menu__list {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;

      .list__item {
        margin-right: 3rem;
        font-size: 1.5rem;
        list-style: none;
        color: ${({ theme }) => theme.colors.white};
        cursor: pointer;

        &:last-child {
          margin-right: 0rem;
        }

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }

  @media (max-width: 868px) {
    width: 27rem;
  }

  @media (max-width: 762px) {
    display: none;
  }
`
