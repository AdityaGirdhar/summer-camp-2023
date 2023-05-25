import React from 'react'
import { Link } from 'react-scroll'
import hero1 from '../assets/hero-1.svg'
import hero2 from '../assets/hero-2.png'
import arrow from '../assets/arrow.svg'

export default function Landing() {
  return (
    <div className='container'>
        <img src="https://sc.iiitd.ac.in/sites/default/files/images/logo/style3colormid.jpg" alt="" style={{maxWidth: '350px', marginBottom: '-10px'}} data-aos="fade-up" data-aos-duration="1000" />
        <img src={hero1} alt="Delhi Education Reimagined" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250" />
        <img src={hero2} alt="Children playing and studying" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" />
        <Link to='about' smooth={true} offset={-36}>
          <img src={arrow} alt="down-arrow" className='down-arrow'/>
        </Link>

        <hr />

        <h2 id='about'>About Summer Camp</h2>
        <p>Summer Camp IIITD is a wonderful initiative by the students of the Indraprastha Institute of Information Technology, Delhi (IIIT-Delhi) that offers a unique blend of education and entertainment for students from government schools. The aim of the summer camp is to provide an environment where these students can learn, explore, and have fun while developing their confidence, aspirations, and skills in various fields. Through a range of engaging activities, workshops, and sessions, Summer Camp IIITD seeks to instill a sense of curiosity and a love for learning in these young minds, helping them to grow into well-rounded individuals who are equipped to face the challenges of the future with confidence and enthusiasm.</p>

        <p className='p-em'>Join us from <strong>May 22, 2023</strong> to <strong>June 17, 2023</strong> at IIIT-Delhi campus</p>


        <hr />
    </div>
  )
}
