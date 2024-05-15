import styled from 'styled-components'

export const Wrapper = styled.div`
  width: max-content;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.gray['100']};
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`
