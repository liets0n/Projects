import styled from 'styled-components'

interface ColorType {
  color: string
}

export const Wrapper = styled.div<ColorType>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 18rem;
  height: max-content;
  padding: 1rem;
  margin-top: 2rem;
  margin-right: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.grey[200]};
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  .vacancy__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 0.5rem;

    .top__leftSide {
      display: flex;
      align-items: center;
      justify-content: center;

      .leftSide__enterpriseImage {
        width: 4rem;
        height: 4rem;
        border-radius: 50rem;
      }

      .leftSide__text {
        margin-left: 1rem;

        .vacancy__title {
          font-size: 1.4rem;
          font-weight: 700;
          color: ${({ theme }) => theme.colors.grey[900]};
        }

        .vacancy__companyName {
          font-size: 1rem;
          margin-top: 0.2rem;
          color: ${({ theme }) => theme.colors.grey[700]};
        }
      }
    }

    .top__saveIcon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2.5rem;
      width: 2.5rem;
      padding: 0.5rem;
      border: thin solid ${({ theme }) => theme.colors.grey[100]};
      border-radius: 0.5rem;
      transition: ease 200ms;

      .saveIcon__icon {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.colors.grey[200]};
      }

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
          rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        cursor: pointer;
      }
    }
  }

  .vacancy__location {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 0.4rem;
    color: ${({ theme }) => theme.colors.grey[800]};

    .location__icon {
      font-size: 1.5rem;
      margin-right: 0.4rem;
    }
  }

  .vacancy__description {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.grey[600]};
  }

  .candidate {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    border-top: thin solid ${({ theme }) => theme.colors.grey[200]};

    .candidate__pictor {
      display: flex;
      align-items: center;
      margin-top: 1rem;
      margin-right: 1rem;

      .pictor {
        width: 2rem;
        border-radius: 100rem;
      }

      .pictor--2 {
        margin-left: -1rem;
      }

      .pictor--3 {
        margin-left: -1rem;
      }
    }

    p {
      font-size: 0.8rem;
      font-weight: lighter;
      margin-top: 1rem;
      color: ${({ theme }) => theme.colors.grey[600]};
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.5rem;
    border-top-left-radius: 50rem;
    border-top-right-radius: 50rem;
    background-color: ${({ color }) => color};
  }
`
