import React from 'react'
import Card from './Card'
import img1 from '../assets/subjects/1.jpg'
import img2 from '../assets/subjects/2.jpg'
import img3 from '../assets/subjects/3.jpg'
import img4 from '../assets/subjects/4.jpg'
import img5 from '../assets/subjects/5.jpg'

export default function Subjects() {
  return (
    <div className='container'>
        <h2>Subjects</h2>
        <div className='cards-grid'>
            <Card image={img1} title="Analytical Reasoning" content="Explore the art of logical thinking and problem-solving through puzzles, patterns, and deductive reasoning and critical thinking"/>
            <Card image={img2} title="Applied Science" content="Explore the practical side of science at our high school summer camp, where students learn how scientific principles are applied in real-world scenarios."/>
            <Card image={img3} title="Astronomy" content="Discover the vastness of the universe in our high school summer camp, exploring celestial bodies, constellations, and the wonders of astronomy."/>
            <Card image={img4} title="Life Skills" content="Empowering teens with essential tools for personal growth, resilience, communication and emotional intelligence during a transformative summer experience."/>
            <Card image={img5} title="Mathematics" content="Explore the fascinating world of numbers, shapes, and patterns in our immersive Mathematics program at the high school summer camp."/>
        </div>
        <hr />
    </div>
  )
}
