import React from 'react'
import Card from './Card'
import atishiImage from '../assets/atishi.png'

export default function Activities() {
  return (
    <div className='container'>
        <h2>Activities</h2>
        <div className='cards-grid'>
            <Card image={atishiImage} title="Product Development" content="Sharpen your entrepreneurial accumen by learning how to develop and sell products"/>
            <Card image={atishiImage} title="Indoor Sports" content="Experience the thrill of competition by playing indoor sports with expert coaches"/>
            <Card image={atishiImage} title="Reading and Writing" content="Learn how to articulate your thoughts with our well-curated reading materials"/>
            <Card image={atishiImage} title="Arts and Crafts" content="Display your inner creativity and unleash the artist inside you"/>
            <Card image={atishiImage} title="Fun Activities" content="We have some other incredibly fun activities waiting for you as well, so don't miss out!"/>
        </div>
        <hr />
    </div>
  )
}
