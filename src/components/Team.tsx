import React from 'react'
import Card from './Card'
import atishiImage from '../assets/atishi.png'
import img0 from '../assets/team/sujay.jpg'
import img1 from '../assets/team/aanchal.jpeg'
import img2 from '../assets/team/abhay.jpeg'
import img3 from '../assets/team/ankush.jpeg'
import g1 from '../assets/team/g1.jpg'
import g2 from '../assets/team/g2.jpg'

export default function Team() {
  return (
    <div className='container'>
        <h2>Meet the Team</h2>
        <div className='cards-grid'>
            <Card image={img0} title="Dr. Sujay Deb" content="sdeb@iiitd.ac.in" />
        </div>
        <h4>Coordinators</h4>
        <div className='cards-grid'>
            <Card title="Aanchal Gupta" content="aanchal21224@iiitd.ac.in" content2="+91 98735 09881"/>
            <Card title="Abhay Singh Yadav" content="abhay20010@iiitd.ac.in" content2="+91 97796 58846"/>
            <Card title="Animesh Pareek" content="animesh21131@iiitd.ac.in" content2="+91 93547 38734"/>
            <Card title="Ankush Gupta" content="ankush21232@iiitd.ac.in" content2="+91 87088 92956"/>
            <Card title="Mohit" content="mohit21542@iiitd.ac.in" content2="+91 88512 28350"/>
        </div>
    </div>
  )
}
