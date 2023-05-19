import React from 'react'
import gal from '../assets/gallery.png'

export default function Gallery() {
  return (
    <>
        <h2>Gallery</h2>
        <img src={gal} alt="gallery" style={{width: '80%', margin: 'auto', display: 'block'}} />
        <br />
        <hr />
    </>
  )
}