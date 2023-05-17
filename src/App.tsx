import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Landing from './components/Landing';
import Opening from './components/Opening';
import Activities from './components/Activities';
import Subjects from './components/Subjects';

function App() {
  return (
    <div className="App">
      <Landing />
      <Opening />
      <Activities />
      <Subjects />
    </div>
  );
}

export default App;
