import React from 'react'
import tt from '../assets/tt.svg'

export default function TimeTable() {
  return (
    <div className='container'>
        <h2>Time Table</h2>
        <img className='time-table' src={tt} alt="Time-Table" />
        <br />
        <a href='https://drive.google.com/file/d/1nf71QCtUWWiQDFKSuxB67RYAVMywalEO/view?usp=sharing' className='download-pdf' download={true} target='_blank'>Download PDF</a>
        <hr />
    </div>
  )
}
