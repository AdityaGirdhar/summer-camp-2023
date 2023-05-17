import React from 'react'
import logo from '../assets/logo.svg'

export default function Header() {
  return (
    <div className='header'>
        <img src={logo} alt="logo" className='logo-img' />
        <div className='links'>Links</div>
    </div>
  )
}
