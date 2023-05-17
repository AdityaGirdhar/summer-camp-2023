import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Landing from './components/Landing';
import Opening from './components/Opening';
import Activities from './components/Activities';
import Subjects from './components/Subjects';
import TimeTable from './components/TimeTable';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Opening />
      <div id='activities'>
        <Activities />
      </div>
      <Subjects />
      <div id='schedule'>
        <TimeTable />
      </div>
      <Gallery />
      <div id='team'>
        <Team />
      </div>
      <Footer />
    </div>
  );
}

export default App;
