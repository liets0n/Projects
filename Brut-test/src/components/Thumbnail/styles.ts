import styled from 'styled-components'

export const Horizontal = styled.div`
  width: max-content;
  height: max-content;

  .thumb {
    width: 17.5rem;
    height: 9.8rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.gray['100']};
    cursor: pointer;
    object-fit: cover;
    object-position: center center;
  }

  .details {
    width: 17.5rem;
    height: 6rem;
    display: flex;
    margin-top: 0.5rem;
    gap: 1rem;

    .details__avatar {
      width: 2.5rem;
      height: 2.2rem;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.colors.gray['100']};
      cursor: pointer;
      object-fit: cover;
      object-position: center center;
    }

    .details__text {
      width: 16rem;
      height: 100%;

      .text__title {
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.375rem;
        color: ${({ theme }) => theme.colors.gray['900']};
        cursor: pointer;
      }

      .text__ChannelName,
      .text__others {
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.25rem;
        color: ${({ theme }) => theme.colors.gray['500']};
        cursor: pointer;
      }

      .text__ChannelName {
        &:hover {
          color: ${({ theme }) => theme.colors.gray['900']};
        }
      }

      .text__others {
        display: flex;
        align-items: center;
        gap: 5px;

        .others__views {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;

          &::after {
            content: '';
            width: 5px;
            height: 5px;
            border-radius: 50rem;
            background-color: ${({ theme }) => theme.colors.gray['500']};
          }
        }

        .others__timePosted {
        }
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
    background-color: ${({ theme }) => theme.colors.gray['100']};
    cursor: pointer;
    object-fit: cover;
    object-position: center center;
  }

  .details {
    width: 50%;
    height: 9.8rem;
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    overflow: hidden;

    .details__title {
      font-size: 1.125rem;
      font-weight: 500;
      line-height: 1.625rem;
      color: ${({ theme }) => theme.colors.gray['900']};
      cursor: pointer;
    }

    .channel__name,
    .details__others,
    .details__description {
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 1.125rem;
      color: ${({ theme }) => theme.colors.gray['500']};
      cursor: pointer;
    }

    .details__others {
      display: flex;
      align-items: center;
      margin-top: 0.2rem;
      gap: 5px;

      .others__views {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        &::after {
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 50rem;
          background-color: ${({ theme }) => theme.colors.gray['500']};
        }
      }

      .others__timePosted {
      }
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
        background-color: ${({ theme }) => theme.colors.gray['100']};
        cursor: pointer;
        object-fit: cover;
        object-position: center center;
      }

      .channel__name {
        &:hover {
          color: ${({ theme }) => theme.colors.gray['900']};
        }
      }
    }

    .details__description {
      margin-top: 1rem;
    }
  }
`
