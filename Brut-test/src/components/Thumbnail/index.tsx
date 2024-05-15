import { DateTime } from 'luxon'

import { Horizontal, Vertical } from './styles'

interface PropType {
  title: string
  channelTitle: string
  thumbnail: string
  views?: number
  time: string
  description?: string
  position: string
}

const Thumbnail = ({
  title,
  channelTitle,
  thumbnail,
  views,
  time,
  description,
  position = 'horizontal',
}: PropType) => {
  const MockView = 12234

  const TransformViews = (value: number) => {
    if (String(value).length === 7) {
      return `${String(value).slice(0, 1)},${String(value).slice(1, 2)} M`
    } else if (String(value).length === 8) {
      return `${String(value).slice(0, 2)} M`
    } else if (String(value).length === 9) {
      return `${String(value).slice(0, 3)} M`
    } else if (String(value).length === 4) {
      return `${String(value).slice(0, 1)},${String(value).slice(1, 2)} mil`
    } else if (String(value).length === 5) {
      return `${String(value).slice(0, 2)} mil`
    } else if (String(value).length === 6) {
      return `${String(value).slice(0, 3)} mil`
    } else {
      return value
    }
  }

  const publishedAt = (date: string) => {
    const todayDate = DateTime.fromISO(DateTime.now().toISO())
    const postedDate = DateTime.fromISO(date)

    const time: any = todayDate
      .diff(postedDate, [
        'years',
        'months',
        'weeks',
        'days',
        'hours',
        'minutes',
        'seconds',
      ])
      .toObject()

    if (time.years !== 0) {
      return `${parseInt(time?.years)} Anos`
    } else if (time.years === 0 && time.months !== 0) {
      return `${parseInt(time?.months)} Meses`
    } else if (time.months === 0 && time.weeks !== 0) {
      return `${parseInt(time?.weeks)} Semanas`
    } else if (time.weeks === 0 && time.days !== 0) {
      return `${parseInt(time?.days)} Dias`
    } else if (time.days === 0 && time.hours !== 0) {
      return `${parseInt(time?.hours)} Horas`
    } else if (time.hours === 0 && time.minutes !== 0) {
      return `${parseInt(time?.minutes)} Minutos`
    } else {
      return `${parseInt(time?.seconds)} s`
    }
  }

  return (
    <>
      {position === 'horizontal' ? (
        <Horizontal>
          <img src={thumbnail} alt='Thumbnail' className='thumb' />

          <div className='details'>
            <img
              src='https://avatars.githubusercontent.com/u/66736104?v=4'
              className='details__avatar'
              alt='Avatar'
            />

            <div className='details__text'>
              <p className='text__title'>
                {String(title).length >= 42
                  ? `${String(title).slice(0, 42)} ...`
                  : String(title)}
              </p>

              <p className='text__ChannelName'>{channelTitle}</p>

              <p className='text__others'>
                <span className='others__views'>
                  {TransformViews(views)} visualizações
                </span>

                <span className='others__timePosted'>
                  há {publishedAt(time)}
                </span>
              </p>
            </div>
          </div>
        </Horizontal>
      ) : (
        <Vertical>
          <img src={thumbnail} alt='Thumbnail' className='thumb' />

          <div className='details'>
            <p className='details__title'>
              {String(title).length >= 512
                ? `${String(title).slice(0, 512)} ...`
                : String(title)}
            </p>

            <p className='details__others'>
              <span className='others__views'>
                {TransformViews(MockView)} visualizações
              </span>

              <span className='others__timePosted'>há {publishedAt(time)}</span>
            </p>

            <div className='details__channel'>
              <img
                src='https://avatars.githubusercontent.com/u/66736104?v=4'
                className='channel__avatar'
                alt='Avatar'
              />

              <p className='channel__name'>{channelTitle}</p>
            </div>

            <p className='details__description'>{description}</p>
          </div>
        </Vertical>
      )}
    </>
  )
}

export default Thumbnail
