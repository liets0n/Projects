import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  margin-top: 3.25rem;
  background-color: ${({ theme }) => theme.colors.grey[100]};
`

export const SideBar = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};

  .useAccount__avatar {
  }

  .useAccount__email {
    font-size: 1rem;
    font-weight: lighter;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.grey[600]};
  }

  .useAccount__name {
    font-size: 1.7rem;
    font-weight: bolder;
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.grey[900]};
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20rem;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.grey[100]};
  }
`
