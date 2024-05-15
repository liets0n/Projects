import { useState, useEffect } from 'react'

import { AiOutlineFire } from 'react-icons/ai'

import {
  Menu,
  SideBar,
  Category,
  Thumbnail,
  SignIn,
  ThumbnailSkeleton,
} from '../../components'
import Api from '../../services/api'
import { Wrapper, Container } from './styles'

const Home = () => {
  const [thumbnails, setThumbnails] = useState<any[]>([])

  const categoriesList = [
    'Todos',
    'Jogos',
    'Músicas',
    'Lives',
    'Programação',
    'ML',
    'IA',
    'História',
    'Hardware',
    'Ciência',
    'Física',
    'Python',
    'VR',
  ]

  const getApiData = () => {
    Api.get('/videos?part=statistics', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: '50',
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
    getApiData()
  }, [])

  return (
    <Wrapper>
      <SideBar />
      <SignIn />

      <Container>
        <Menu />

        <main>
          <div className='categories'>
            {categoriesList.map(item => (
              <Category text={item} key={item} />
            ))}
          </div>

          <div className='videos'>
            <h2 className='videos__category'>
              <AiOutlineFire className='category__icon' />
              <span className='category__text'>Trading</span>
            </h2>

            <div className='videos__Thumbnail'>
              {thumbnails.length !== 0
                ? thumbnails.map(item => (
                    <Thumbnail
                      key={item?.snippet.title}
                      title={item?.snippet.title}
                      channelTitle={item?.snippet.channelTitle}
                      thumbnail={item?.snippet.thumbnails.high.url}
                      views={item?.statistics.viewCount}
                      time={item?.snippet.publishedAt}
                      position='horizontal'
                    />
                  ))
                : Array(52)
                    .fill(0)
                    .map(item => (
                      <ThumbnailSkeleton key={item} position='horizontal' />
                    ))}
            </div>
          </div>
        </main>
      </Container>
    </Wrapper>
  )
}

export default Home
