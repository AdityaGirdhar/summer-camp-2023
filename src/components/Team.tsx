import React from 'react'
import Card from './Card'
import atishiImage from '../assets/atishi.png'

export default function Team() {
  return (
    <div className='container'>
        <h2>Meet the Team</h2>
        <div className='cards-grid'>
            <Card image={atishiImage} title="Ashutosh Bramha" content="ashutosh@iiitd.ac.in" content2="+91 82876 16775"/>
        </div>
        <h4>Coordinators</h4>
        <div className='cards-grid'>
            <Card image={atishiImage} title="Ashutosh Bramha" content="ashutosh@iiitd.ac.in" content2="+91 82876 16775"/>
            <Card image={atishiImage} title="Ashutosh Bramha" content="ashutosh@iiitd.ac.in" content2="+91 82876 16775"/>
            <Card image={atishiImage} title="Ashutosh Bramha" content="ashutosh@iiitd.ac.in" content2="+91 82876 16775"/>
            <Card image={atishiImage} title="Ashutosh Bramha" content="ashutosh@iiitd.ac.in" content2="+91 82876 16775"/>
            <Card image={atishiImage} title="Ashutosh Bramha" content="ashutosh@iiitd.ac.in" content2="+91 82876 16775"/>
        </div>
    </div>
  )
}
