import React from 'react'
import Card from './Card'
import atishiImage from '../assets/atishi.png'

export default function Subjects() {
  return (
    <div className='container'>
        <h2>Subjects</h2>
        <div className='cards-grid'>
            <Card image={atishiImage} title="Analytical Reasoning" content="Explore the art of logical thinking and problem-solving through puzzles, patterns, and deductive reasoning and critical thinking"/>
            <Card image={atishiImage} title="Applied Science" content="Explore the practical side of science at our high school summer camp, where students learn how scientific principles are applied in real-world scenarios."/>
            <Card image={atishiImage} title="Astronomy" content="Discover the vastness of the universe in our high school summer camp, exploring celestial bodies, constellations, and the wonders of astronomy."/>
            <Card image={atishiImage} title="Life Skills" content="Empowering teens with essential tools for personal growth, resilience, communication and emotional intelligence during a transformative summer experience."/>
            <Card image={atishiImage} title="Mathematics" content="Explore the fascinating world of numbers, shapes, and patterns in our immersive Mathematics program at the high school summer camp."/>
        </div>
        <hr />
    </div>
  )
}
