import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { MdClose } from 'react-icons/md'

import { Wrapper } from './styles'
import { historyManager } from './../../utils/features'

const History = ({ result, show }) => {
  const [history, setHistory] = useState([]);

  const showTheModal = show[0]
  const setShowTheModal = show[1]

  useEffect(() => {
    setHistory(historyManager("get"));
  }, [result]);

  const handleRemoveHistory = () => {
    window.localStorage.removeItem('History')
    toast.success('All historical was deleted 🔥')
  }

  return (
    <Wrapper show={showTheModal}>
      <div className='header'>
        <h1 className='header__title'>Historical</h1>
        <MdClose className='header__icon' onClick={() => setShowTheModal(false)} />
      </div>

      <ul className='list'>
        {history.map((item) => (
          <li className='list__item' key={item}>{item}</li>
        ))}
      </ul>

      <button
        type="button"
        name="delete all Historical"
        title="delete all Historical"
        className='btn--delete'
        onClick={() => handleRemoveHistory()}
      >
        Delete historical
      </button>
    </Wrapper>
  )
}

export default History
