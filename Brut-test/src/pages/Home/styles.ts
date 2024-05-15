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

    .categories {
      width: 100%;
      height: max-content;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .videos {
      width: 100%;
      height: max-content;

      .videos__category {
        display: flex;
        align-items: center;
        margin-top: 1rem;
        margin-bottom: 0.5rem;
        gap: 0.5rem;

        .category__icon {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          color: ${({ theme }) => theme.colors.primary};
        }
      }

      .videos__Thumbnail {
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
      }
    }
  }
`
