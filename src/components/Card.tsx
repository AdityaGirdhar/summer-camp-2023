import React from 'react'

export default function Card({image, title, content, content2}: any) {
  return (
    <div className='card'>
        {image === undefined ? "" : <img className='card-img' src={image} alt="card" />}
        <h5>{title}</h5>
        <p style={{marginBottom: '8px'}}>{content === undefined ? "" : content}</p>
        <p>{content2 === undefined ? "" : content2}</p>
    </div>
  )
}
