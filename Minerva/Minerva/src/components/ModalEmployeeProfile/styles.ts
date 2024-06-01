import styled from 'styled-components'

export const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  transform: 'translate(-50%, -50%)';
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1024;

  .close--icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50rem;
    background-color: ${({ theme }) => theme.colors['gray-100']};
    cursor: pointer;
  }

  .content {
    width: 39rem;
    height: 18rem;
    padding: 2rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors['gray-100']};

    .content__info {
      .info__avatar {
        width: 7rem;
        height: 7rem;
        border-radius: 50rem;
        background-color: ${({ theme }) => theme.colors['gray-200']};
      }

      .info__text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: max-content;
        height: auto;
        line-height: 1.5rem;

        .text__name {
          font-size: 1.5rem;
          margin-top: 1rem;
        }

        .text__position {
          margin-top: 0.4rem;
          color: ${({ theme }) => theme.colors['gray-500']};
        }
      }
    }
  }
`
