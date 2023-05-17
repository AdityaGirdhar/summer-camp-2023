import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Landing from './components/Landing';
import Opening from './components/Opening';
import Activities from './components/Activities';
import Subjects from './components/Subjects';
import TimeTable from './components/TimeTable';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Landing />
      <Opening />
      <Activities />
      <Subjects />
      <TimeTable />
      <Gallery />
    </div>
  );
}

export default App;
