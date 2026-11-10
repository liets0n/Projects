import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grey[100]};
`
export const LeftSide = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 35rem;
  height: 40rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  .leftSide__element {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 2rem;

    .element__label {
      font-size: 1rem;
      margin-bottom: 0.5rem;
      color: ${({ theme }) => theme.colors.grey[900]};
    }

    .element__textarea {
      width: 30rem;
      height: 20rem;
      padding: 1rem;
      font-size: 1rem;
      border-radius: 1rem;
      color: ${({ theme }) => theme.colors.grey[600]};
      border: thin solid ${({ theme }) => theme.colors.grey[600]};
      background-color: transparent;
    }
  }
`

export const RightSide = styled.section`
  width: 45rem;
  height: max-content;
  padding: 1.5rem;

  .rightSide__title {
    width: 37rem;
    height: max-content;
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.grey[900]};
  }

  .rightSide__description {
    width: 37rem;
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.grey[600]};
  }

  .rightSide__controle {
    margin-top: 2rem;

    .controle__steps {
      color: ${({ theme }) => theme.colors.grey[600]};
    }

    .controle__arrows {
      display: block;
      margin-top: 1rem;

      .arrows__link {
        font-size: 2rem;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.grey[900]};
        cursor: pointer;

        .link__icon {
          &:first-child {
            margin-right: 1rem;
          }
        }

        .notActive {
          color: ${({ theme }) => theme.colors.grey[600]};
          cursor: auto;
        }
      }
    }
  }
`
