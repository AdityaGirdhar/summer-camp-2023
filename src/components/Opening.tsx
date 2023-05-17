import React from 'react'
import atishiImage from '../assets/atishi.png'

export default function Opening() {
  return (
    <div className='container'>
        <h2>Opening Ceremony</h2>
        <p className="p-em">We welcome a distinguished chief guest for our opening ceremony.</p>
        <img src={atishiImage} className='atishi-image' alt="Ms. Atishi" />
        <p className="p-em" style={{marginBottom: '5px'}}><strong>Ms. Atishi</strong></p>
        <p>Hon'able Minister</p>
        <p>Higher and Technical Education</p>
        <p>GNCT of Delhi</p>
        <br />
        <p className='p-em'>Join us on <strong>May 22, 2023</strong> at IIIT-Delhi campus!</p>
        <hr />
    </div>
  )
}
