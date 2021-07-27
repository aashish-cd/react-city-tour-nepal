import React, { useState } from 'react'
import tourData from './tourData'

const Tours = () => {
  const [more, setMore] = useState(false)
  const [active, setActive] = useState(0)

  return (
    <div className='container  pd-5'>
      {tourData.map((item) => {
        const { id, city, img, name, info } = item
        return (
          <div className='grid-item' key={id}>
            <img src={img} className='image' alt={name} />
            <div className='container-body'>
              <h2>{city}</h2>
              <h5 className='title'>{name}</h5>
              <p className={` ${id === active ? 'text' : 'hide'}`}>{info}</p>
              <button
                onClick={() => {
                  setActive(id)
                }}
              >
                {id === active ? 'show less' : 'Read more'}
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Tours
