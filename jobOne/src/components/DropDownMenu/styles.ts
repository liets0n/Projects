import styled from 'styled-components'

interface PropType {
  open: boolean
}

export const Wrapper = styled.header<PropType>`
  position: absolute;
  top: 3.2rem;
  right: 16rem;
  display: ${({ open }) => (open ? 'block' : 'none')};
  width: 14rem;
  height: max-content;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.grey[200]};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  z-index: 1024;

  .dropdown {
    .dropdown__list {
      display: flex;
      justify-content: center;
      flex-direction: column;

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.grey[600]};

        .list__item {
          font-size: 1rem;
          list-style: none;
          margin-top: 1.5rem;
          cursor: pointer;
        }

        .list__item--profile {
          margin-top: 0;
        }
      }

      .separator {
        width: 90%;
        height: 0.5px;
        list-style: none;
        margin-top: 0.5rem;
        background-color: ${({ theme }) => theme.colors.grey[200]};
      }
    }
  }
`
