import React from 'react'
import Card from './Card'
import img1 from '../assets/activities/1.jpg'
import img2 from '../assets/activities/2.jpg'
import img3 from '../assets/activities/3.jpg'
import img4 from '../assets/activities/4.jpg'
import img5 from '../assets/activities/5.jpg'

export default function Activities() {
  return (
    <div className='container'>
        <h2>Activities</h2>
        <div className='cards-grid'>
            <Card image={img4} title="Arts and Crafts" content="Display your inner creativity and unleash the artist inside you"/>
            <Card image={img5} title="Fun Activities" content="We have some other incredibly fun activities waiting for you as well, so don't miss out!"/>
            <Card image={img2} title="Indoor Sports" content="Experience the thrill of competition by playing indoor sports with expert coaches"/>
            <Card image={img1} title="Product Development" content="Sharpen your entrepreneurial accumen by learning how to develop and sell products"/>
            <Card image={img3} title="Reading and Writing" content="Learn how to articulate your thoughts with our well-curated reading materials"/>
        </div>
        <hr />
    </div>
  )
}
