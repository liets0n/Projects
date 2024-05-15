import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 15rem;
  overflow: hidden;

  main {
    width: 100%;
    height: max-content;
    padding: 1rem;

    .videos__Thumbnail {
      width: 100%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
`
