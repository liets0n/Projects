import React from 'react'
import Skeleton from 'react-loading-skeleton'

import { Wrapper } from './styles'

type PropType = {
  count: number
}

const EmployeeSkeleton = ({ count }: PropType) => {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Wrapper key={index}>
            <td className='column__line column__line--1'>
              <Skeleton className='line__avatar' count={1} width={48} height={48} circle />

              <span className='info'>
                <p className='line__text'>
                  <Skeleton count={1} width={192} height={15} />
                </p>

                <p className='line__text'>
                  <Skeleton count={1} width={192} height={13} />
                </p>
              </span>
            </td>

            <td className='column__line column__line--2'>
              <p className='line__text'>
                <Skeleton count={1} width={128} height={18} />
              </p>
            </td>

            <td className='column__line column__line--3'>
              <p className='line__text'>
                <Skeleton count={1} width={144} height={18} />
              </p>
            </td>

            <td className='column__line column__line--4'>
              <p className='line__text'>
                <Skeleton count={1} width={160} height={18} />
              </p>
            </td>

            <td className='column__line column__line--5'>
              <Skeleton count={1} width={112} height={18} />
            </td>

            <td className='column__line column__line--6'>
              <Skeleton count={1} width={110} height={18} />
            </td>
          </Wrapper>
        ))}
    </>
  )
}

export default EmployeeSkeleton
