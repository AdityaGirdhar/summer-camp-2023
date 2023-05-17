import React from 'react'
import { Link } from 'react-scroll'
import logo from '../assets/logo.svg'

export default function Header() {
  return (
    <div className='header'>
        <img src={logo} alt="logo" className='logo-img' />
        <div className='links'>
            <Link smooth={true} to="activities">Activities</Link>
            <Link smooth={true} to="schedule">Schedule</Link>
            <Link smooth={true} to="team">Team</Link>
        </div>
    </div>
  )
}
