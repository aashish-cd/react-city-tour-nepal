import React, { useState } from 'react';
import tourData from './tourData';

const Tours = () => {
  const [active, setActive] = useState(0);
  const [showMore, setShowMore] = useState(false);
  //   const [more, setMore] = useState(false)

  return (
    <div className='container  pd-5'>
      {tourData.map((item) => {
        const { id, city, img, name, info } = item;
        return (
          <div className='grid-item' key={id}>
            <img src={img} className='image' alt={name} />
            <div className='container-body'>
              <h2>{city}</h2>
              <h5 className='title'>{name}</h5>
              <p className={` ${id === active && showMore ? 'text' : 'hide'} `}>
                {info}
              </p>
              <button
                onClick={() => {
                  setActive(id);
                  setShowMore(!showMore);

                  //                   setMore(!more)
                }}
              >
                {id === active && showMore ? 'show less' : 'Read more'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Tours;
