import React from 'react'

import { CaretLeft, CaretRight } from '@phosphor-icons/react'

import { Wrapper } from './styles'

type PropType = {
  limit: number
  total: number
  offset: number
  setOffset: any
}

const MAX_ITEMS = 5
const MAX_ITEMS_LEFT = (MAX_ITEMS - 1) / 2

const Pagination = ({ limit, total, offset, setOffset }: PropType) => {
  const currentPage = offset ? offset / limit + 1 : 1
  const pages = Math.ceil(total / limit)
  const firstPage = Math.max(currentPage - MAX_ITEMS_LEFT, 1)

  const onPageChange = (item: number) => {
    setOffset((item - 1) * limit)
  }

  return (
    <Wrapper>
      <li className='list'>
        <button
          className='list__item'
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <CaretLeft />
        </button>
      </li>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + firstPage)
        .map(item => (
          <li key={item} className='list'>
            <button
              type='button'
              className={item === currentPage ? 'list__item list__item--active' : 'list__item'}
              onClick={() => onPageChange(item)}
            >
              {item}
            </button>
          </li>
        ))}
      <li className='list'>
        <button
          className='list__item'
          disabled={currentPage === pages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <CaretRight />
        </button>
      </li>
    </Wrapper>
  )
}

export default Pagination
