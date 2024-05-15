import styled from 'styled-components'

export const Horizontal = styled.div`
  width: max-content;
  height: max-content;

  .thumb {
    width: 17.4rem;
    height: 9.8rem;
    border-radius: 0.5rem;
  }

  .details {
    width: 17rem;
    height: 6rem;
    display: flex;
    margin-top: 0.5rem;
    gap: 1rem;

    .details__avatar {
      width: 2.5rem;
      height: 2.2rem;
      border-radius: 0.5rem;
    }

    .details__text {
      width: 16rem;
      height: 100%;

      .text__title {
        width: 100%;
        height: 1.5rem;
        margin-bottom: 0.5rem;
      }

      .text__ChannelName {
        width: 7rem;
      }

      .text__views {
        width: 9.5rem;
      }
    }
  }
`

export const Vertical = styled.div`
  width: 100%;
  height: max-content;
  display: flex;

  .thumb {
    width: 17.5rem;
    height: 9.8rem;
    border-radius: 0.5rem;
  }

  .details {
    width: 50%;
    height: 9.8rem;
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    overflow: hidden;

    .details__title {
      width: 70%;
      height: 2rem;
    }

    .details__views {
      width: 50%;
      height: 1rem;
      margin-top: 0.5rem;
    }

    .details__channel {
      display: flex;
      align-items: center;
      margin-top: 0.5rem;
      gap: 0.5rem;

      .channel__avatar {
        width: 2.5rem;
        height: 2.2rem;
        border-radius: 0.5rem;
      }

      .channel__name {
        width: 8rem;
        height: 1rem;
      }
    }

    .details__description {
      margin-top: 1rem;
      width: 40%;
      height: 1.5rem;
    }
  }
`
