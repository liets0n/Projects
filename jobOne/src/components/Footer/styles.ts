import styled from 'styled-components'

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 24rem;
  margin-top: 7rem;
  color: ${({ theme }) => theme.colors.grey[50]};
  background-color: ${({ theme }) => theme.colors.secondary};

  .context {
    display: flex;
    flex-direction: column;
    width: 75%;

    .context__top {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .context__top--leftSide {
        .leftSie__logo {
          font-size: 3rem;
          color: ${({ theme }) => theme.colors.white};
        }

        .togglers {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2rem;

          .leftSie__select {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 2.5rem;
            font-size: 1rem;
            padding: 0.5rem;
            margin-right: 2rem;
            border-radius: 50rem;
            border: 1px solid ${({ theme }) => theme.colors.grey[50]};
          }

          .theme {
            transition: background 0.2s linear;

            .theme__input {
              position: absolute;
              opacity: 0;
            }

            .theme__label {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 3.7rem;
              height: 1.7rem;
              padding: 0.5rem;
              border-radius: 50rem;
              background-color: ${({ theme }) => theme.colors.grey[500]};
              cursor: pointer;
              transform: scale(1.5);

              .label__moonIcon {
                color: ${({ theme }) => theme.colors.yellow[500]};
              }

              .label__sunIcon {
                color: ${({ theme }) => theme.colors.yellow[600]};
              }

              .label__ball {
                position: absolute;
                top: 2px;
                left: 2px;
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 50%;
                background-color: ${({ theme }) => theme.colors.grey[800]};
                transform: translateX(0);
                transition: transform 0.2s linear;
              }
            }

            .theme__input:checked + .theme__label .label__ball {
              transform: translateX(2rem);
            }
          }
        }
      }

      .context__top--rightSide {
        display: flex;

        .rightSide__list {
          margin-right: 5rem;

          .list__title {
            font-size: 1.3rem;
            list-style: none;
            color: ${({ theme }) => theme.colors.white};
          }

          .list__item {
            font-size: 1rem;
            list-style: none;
            margin-top: 1rem;

            .item__link {
              text-decoration: none;
              color: ${({ theme }) => theme.colors.grey[200]};
            }

            &:hover {
              text-decoration: underline;
            }

            &:first-child {
              margin-top: 1rem;
            }
          }

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }

    .separator {
      display: flex;
      flex-direction: column;
      margin-top: 2.5rem;
      margin-bottom: 2rem;

      &:before {
        content: '';
        width: 100%;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.grey[500]};
      }
    }

    .context__bottom {
      display: flex;
      justify-content: space-between;
      color: ${({ theme }) => theme.colors.white};

      .list {
        display: flex;

        a {
          text-decoration: none;
          margin-right: 1rem;
          color: ${({ theme }) => theme.colors.white};

          &:last-child {
            margin: 0;
          }
        }

        .list__item {
          list-style: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .btnScrollToTop {
    position: absolute;
    right: 2rem;
    bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    font-size: 2rem;
    border: none;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    appearance: none;
    transition: 200ms;
    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }
  }
`
