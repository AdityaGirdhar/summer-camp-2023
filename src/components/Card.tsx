import React from 'react'

export default function Card({image, title, content}: any) {
  return (
    <div className='card'>
        <img className='card-img' src={image} alt="card" />
        <h5>{title}</h5>
        <p>{content === undefined ? "" : content}</p>
    </div>
  )
}
