import React from 'react'
import { PropsWithChildren } from 'react'

export default function Card({image, title, content}: any) {
  return (
    <div className='card'>
        <img className='card-img' src={image} alt="card-image" />
        <h5>{title}</h5>
        <p>{content === undefined ? "" : content}</p>
    </div>
  )
}