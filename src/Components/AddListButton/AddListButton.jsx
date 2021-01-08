import React, { useState } from 'react'
import List from '../List/List'
import Badge from '../Badge/Badge'

import closeSvg from '../../assets/img/close.svg'
import './AddListButton.scss'
import '../../index.scss'

const AddListButton = ({ colors }) => {
  const [visiblePopup, setVisiblePopup] = useState(false)
  const [selectedColor, setSelectedColor] = useState(colors[0].id)

  return (
    <div className='add-list'>
      <List
        onClick={() => setVisiblePopup(!visiblePopup)}
        items={[
          {
            className: 'list__add-button',
            icon: (
              <svg
                width='12'
                height='12'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8 1V15'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M1 8H15'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            ),
            name: 'Add folder',
          },
        ]}
      />
      {visiblePopup && (
        <div className='add-list__popup'>
          <img
            onClick={() => setVisiblePopup(false)}
            src={closeSvg}
            alt='close-button'
            className='add-list__popup-close-btn'
          />
          <input type='text' placeholder='Folder name' className='field' />
          <div className='add-list__popup-colors'>
            {colors.map((color) => (
              <Badge
                color={color.name}
                key={color.id}
                onClick={() => setSelectedColor(color.id)}
                className={selectedColor === color.id && 'active'}
              />
            ))}
          </div>
          <button className='button'>Add new</button>
        </div>
      )}
    </div>
  )
}

export default AddListButton