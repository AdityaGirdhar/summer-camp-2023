import React from 'react'
import tt from '../assets/tt.svg'
import ttSpeakers from '../assets/tt-speakers.svg'

export default function TimeTable() {
  return (
    <div className='container'>
        <h2>Time Table</h2>
        <img src={ttSpeakers} alt="Speakers" style={{marginBottom: '25px'}} />
        <img className='time-table' src={tt} alt="Time-Table" />
        <br />
        <a href='https://drive.google.com/file/d/1nf71QCtUWWiQDFKSuxB67RYAVMywalEO/view?usp=sharing' className='download-pdf' download={true} target='_blank'>Download PDF</a>
        <hr />
    </div>
  )
}
