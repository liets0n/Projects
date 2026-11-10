import styled from 'styled-components'

export const Wrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3.25rem;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 1024;

  .menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    z-index: 1024;

    .menu__title {
      display: flex;
      align-items: center;
      justify-content: center;
      width: max-content;
      height: 100%;
      font-size: 2rem;
      margin-right: 25rem;

      .title__link {
        text-decoration: none;
        text-transform: none;
        color: ${({ theme }) => theme.colors.grey[900]};
      }
    }

    .menu__list {
      display: flex;
      align-items: center;
      justify-content: center;

      .list__item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: max-content;
        height: 100%;
        list-style: none;
        text-decoration: none;
        margin-right: 2rem;

        .item__link {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          color: ${({ theme }) => theme.colors.grey[600]};
          cursor: pointer;

          .link__icon {
            font-size: 1.5rem;
          }

          .link__text {
            font-size: 0.75rem;
            margin-top: 0.3rem;
          }
        }
      }

      .list__item--userPictor {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        .item__pictor {
          width: 3rem;
        }

        .item__pictorWrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50rem;
          background-color: ${({ theme }) => theme.colors.grey[300]};

          .pictorWrapper__pictor {
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 50rem;
            object-fit: cover;
          }
        }

        .pictorWrapper__arrowDownIcon {
          font-size: 1rem;
          transition: ease 1s;
          color: ${({ theme }) => theme.colors.grey[900]};
        }

        .Arrow_down_icon--inverted {
          transform: rotate(-180deg);
        }
      }
    }
  }
`
