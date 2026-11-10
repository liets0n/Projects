import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 3.25rem;
  background-color: ${({ theme }) => theme.colors.grey[100]};
  z-index: 1;

  .top {
    width: 100%;
    height: max-content;

    .top__banner {
      width: 100%;
      height: 20rem;
    }

    .top__user {
      display: flex;
      align-items: center;
      justify-content: center;
      width: max-content;
      height: max-content;
      margin-top: -3rem;
      margin-left: 8rem;

      .user__pictor {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        border: 0.3rem solid ${({ theme }) => theme.colors.grey[50]};
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
          rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        object-fit: cover;
      }

      .user__name {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        margin-left: 1rem;
        line-height: 2rem;

        .name__user {
          font-size: 2rem;
          font-weight: bold;
          color: ${({ theme }) => theme.colors.grey[900]};
        }

        .name__id {
          font-size: 1rem;
          font-weight: lighter;
          color: ${({ theme }) => theme.colors.grey[600]};
        }
      }
    }
  }
`
