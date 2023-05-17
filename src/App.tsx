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

function App() {
  return (
    <div className="App">
      <Landing />
      <Opening />
      <Activities />
      <Subjects />
      <TimeTable />
      <Gallery />
      <Team />
    </div>
  );
}

export default App;
