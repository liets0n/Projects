import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import {
  Menu,
  SideBar,
  Thumbnail,
  SignIn,
  ThumbnailSkeleton,
} from '../../components'
import Api from '../../services/api'
import { Wrapper, Container } from './styles'
import { type RootState } from '../../context/store'

const Search = () => {
  const [thumbnails, setThumbnails] = useState<any[]>([])

  const { text } = useSelector((state: RootState) => state.search)

  const getApiData = (value: string) => {
    Api.get('/search', {
      params: {
        part: 'snippet',
        order: 'relevance',
        maxResults: '50',
        q: `${value}`,
        safeSearch: 'none',
        videoCaption: 'any',
        videoDefinition: 'any',
        videoDuration: 'any',
        type: 'video',
        key: `${import.meta.env.VITE_API_KEY}`,
      },
    })
      .then(response => {
        setThumbnails(response.data.items)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    getApiData(text)
  }, [text])

  return (
    <Wrapper>
      <SideBar />
      <SignIn />

      <Container>
        <Menu />

        <main>
          <div className='videos__Thumbnail'>
            {thumbnails.length !== 0
              ? thumbnails.map(item => (
                  <Thumbnail
                    key={item?.snippet.title}
                    title={item?.snippet.title}
                    channelTitle={item?.snippet.channelTitle}
                    thumbnail={item?.snippet.thumbnails.high.url}
                    time={item?.snippet.publishedAt}
                    description={item?.snippet.description}
                    position='vertical'
                  />
                ))
              : Array(52)
                  .fill(0)
                  .map(item => (
                    <ThumbnailSkeleton key={item} position='vertical' />
                  ))}
          </div>
        </main>
      </Container>
    </Wrapper>
  )
}

export default Search
