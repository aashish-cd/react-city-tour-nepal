import React, { useState } from 'react'
import tourData from './tourData'


const Tours = () => {
 const [more, setMore] = useState(false)

 const controlMore = (id) => {
  setMore(!more)
 }
 return (
  <div className='container  pd-5'>
   {

    tourData.map((item) => {
     const { id, city, img, name, info } = item
     return (

      <div className="card col-8 m-2 pd-3" key={id}>
       <img src={img} className="card-img-top" alt={name} />
       <div className="card-body">
        <h2>{city}</h2>
        <h5 className="card-title">{name}</h5>
        {more ? <p className="card-text">{info}</p> : ''}
        <button onClick={() => controlMore(id)}>
         {more ? 'show less' : 'show more'}
        </button>



       </div>
      </div>
     )
    })
   }
  </div>
 )
}
export default Tours