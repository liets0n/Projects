import React from 'react'

import { Wrapper } from './styles'

import { X } from '@phosphor-icons/react'

type PropType = {
  data: any
  modalState: any
}

import Avatar from './../../assets/illustrations/Avatar.png'

const ModalEmployeeProfile = ({ data, modalState }: PropType) => {
  console.log(data)

  return (
    <Wrapper onClick={() => modalState((state: boolean) => !state)}>
      <span className='close--icon' title='Fechar' onClick={() => modalState((state: boolean) => !state)}>
        <X />
      </span>

      <div className='content'>
        <div className='content__info'>
          <img
            src={data.avatar ? data.avatar.url : Avatar}
            alt='Avatar do funcionário'
            className='info__avatar'
          />

          <div className='info__text'>
            <p className='text__name'>{data?.name.concat(' ', data?.lastname)}</p>
            <p className='text__position'>{data?.position}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default ModalEmployeeProfile
