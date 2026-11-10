import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 49rem;
  padding: 2rem;
  margin-top: 1rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  overflow: auto;

  .filter__list {
    .list__item {
      list-style: none;
      text-decoration: none;
      text-transform: none;
      color: ${({ theme }) => theme.colors.grey[600]};
    }

    .list__checkBox {
      .checkBox__title {
        font-size: 1rem;
        font-weight: lighter;
        margin-top: 2rem;
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.grey[900]};
      }

      .checkBox__wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .wrapper__items {
          display: flex;
          align-items: center;
          list-style: none;
          text-decoration: none;
          text-transform: none;
          margin-right: 1rem;
          margin-bottom: 1.5rem;

          .items__input {
            margin-right: 1rem;
            width: 1.5rem;
            height: 1.5rem;
            cursor: pointer;
          }

          .items__label {
            cursor: pointer;
          }
        }
      }
    }

    .list__checkBox--order {
      .checkBox__title {
        margin-top: 0;
      }
    }
  }
`
