import React from 'react'
import tt from '../assets/tt.svg'

export default function TimeTable() {
  return (
    <div className='container'>
        <h2>Time Table</h2>
        <img className='time-table' src={tt} alt="Time-Table" />
        <hr />
    </div>
  )
}
