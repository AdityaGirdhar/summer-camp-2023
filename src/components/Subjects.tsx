import React from 'react'
import Card from './Card'
import atishiImage from '../assets/atishi.png'

export default function Subjects() {
  return (
    <div className='container'>
        <h2>Subjects</h2>
        <div className='cards-grid'>
            <Card image={atishiImage} title="SubjectName" content="hfds fdshbff jvk fhdjk vjs vhfsvk fshv fsvnfjksv njk v"/>
            <Card image={atishiImage} title="SubjectName" content="hfds fdshbff jvk fhdjk vjs vhfsvk fshv fsvnfjksv njk v"/>
            <Card image={atishiImage} title="SubjectName" content="hfds fdshbff jvk fhdjk vjs vhfsvk fshv fsvnfjksv njk v"/>
            <Card image={atishiImage} title="SubjectName" content="hfds fdshbff jvk fhdjk vjs vhfsvk fshv fsvnfjksv njk v"/>
            <Card image={atishiImage} title="SubjectName" content="hfds fdshbff jvk fhdjk vjs vhfsvk fshv fsvnfjksv njk v"/>
            <Card image={atishiImage} title="SubjectName" content="hfds fdshbff jvk fhdjk vjs vhfsvk fshv fsvnfjksv njk v"/>
        </div>
        <hr />
    </div>
  )
}
