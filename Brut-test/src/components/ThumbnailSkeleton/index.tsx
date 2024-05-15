import React from 'react'
import Skeleton from 'react-loading-skeleton'

import { Horizontal, Vertical } from './styles'

interface PropTypes {
  position: string
}

const ThumbnailSkeleton = ({ position = 'horizontal' }: PropTypes) => {
  return (
    <>
      {position === 'horizontal' ? (
        <Horizontal>
          <Skeleton className='thumb' />

          <div className='details'>
            <Skeleton className='details__avatar' />

            <div className='details__text'>
              <Skeleton className='text__title' />
              <Skeleton className='text__ChannelName' />
              <Skeleton className='text__views' />
            </div>
          </div>
        </Horizontal>
      ) : (
        <Vertical>
          <Skeleton className='thumb' />

          <div className='details'>
            <Skeleton className='details__title' />
            <Skeleton className='details__views' />

            <div className='details__channel'>
              <Skeleton className='channel__avatar' />
              <Skeleton className='channel__name' />
            </div>

            <Skeleton className='details__description' />
          </div>
        </Vertical>
      )}
    </>
  )
}

export default ThumbnailSkeleton
