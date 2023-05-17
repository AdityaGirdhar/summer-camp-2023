import React from 'react'
import Card from './Card'
import atishiImage from '../assets/atishi.png'

export default function Team() {
  return (
    <div className='container'>
        <h2>Meet the Team</h2>
        <div className='cards-grid'>
            <Card image={atishiImage} title="Name" content="designation"/>
        </div>
    </div>
  )
}
