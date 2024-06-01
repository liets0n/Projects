import styled from 'styled-components'

export const Wrapper = styled.div`
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

  .content {
    width: 39rem;
    height: 18rem;
    padding: 2rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors['gray-100']};

    .content__title {
      font-weight: 700;
    }

    .content__description {
      margin-top: 2rem;
      color: ${({ theme }) => theme.colors['gray-500']};
    }

    .content__buttons {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-top: 6rem;
      margin-bottom: 0;

      .buttons__element {
        width: 9rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        margin-left: 1rem;
        border-radius: 2rem;
        color: ${({ theme }) => theme.colors['gray-50']};

        &:hover {
          filter: brightness(0.9);
        }
      }

      .buttons__element--cancel {
        border: thin solid ${({ theme }) => theme.colors['gray-300']};
        color: ${({ theme }) => theme.colors['gray-900']};
        background-color: ${({ theme }) => theme.colors['gray-100']};
      }

      .buttons__element--confirm {
        background-color: ${({ theme }) => theme.colors['red-300']};
      }

      .buttons__element--success {
        background-color: ${({ theme }) => theme.colors['primary']};
      }
    }
  }
`
