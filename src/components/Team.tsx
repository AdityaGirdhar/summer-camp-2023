import React from 'react'
import Card from './Card'
import atishiImage from '../assets/atishi.png'
import img0 from '../assets/team/ab.jpeg'
import img1 from '../assets/team/aanchal.jpeg'
import img2 from '../assets/team/abhay.jpeg'
import img3 from '../assets/team/ankush.jpeg'

export default function Team() {
  return (
    <div className='container'>
        <h2>Meet the Team</h2>
        <div className='cards-grid'>
            <Card image={img0} title="Ashutosh Bramha" content="ashutosh@iiitd.ac.in" content2="+91 82876 16775"/>
        </div>
        <h4>Coordinators</h4>
        <div className='cards-grid'>
            <Card image={img1} title="Aanchal Gupta" content="aanchal21224@iiitd.ac.in" content2="+91 98735 09881"/>
            <Card image={img2} title="Abhay Singh Yadav" content="abhay20010@iiitd.ac.in" content2="+91 97796 58846"/>
            <Card image={atishiImage} title="Animesh" content="animesh21131@iiitd.ac.in" content2="+91 93547 38734"/>
            <Card image={img3} title="Ankush Gupta" content="ankush21232@iiitd.ac.in" content2="+91 87088 92956"/>
            <Card image={atishiImage} title="Mohit" content="mohit21542@iiitd.ac.in" content2="+91 88512 28350"/>
        </div>
    </div>
  )
}
