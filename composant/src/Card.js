import React from 'react'

export default function Card({title ,numbers, para}) {
  return (
    <div className='card'>
        <h2>{numbers} </h2><br></br>
        <h3>{title} </h3><br></br>
        <hr></hr><br></br>
        <p>{para} </p><br></br>
      
    </div>
  )
}
