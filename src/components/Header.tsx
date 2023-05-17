import React from 'react'
import { Link } from 'react-scroll'
import logo from '../assets/logo.svg'

export default function Header() {
  return (
    <div className='header'>
        <img src={logo} alt="logo" className='logo-img' />
        <div className='links'>
            <Link smooth={true} offset={-36} to="activities">Activities</Link>
            <Link smooth={true} offset={-36} to="schedule">Schedule</Link>
            <Link smooth={true} offset={-36} to="team">Team</Link>
        </div>
    </div>
  )
}
