import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Landing from './components/Landing';
import Opening from './components/Opening';
import Activities from './components/Activities';

function App() {
  return (
    <div className="App">
      <Landing />
      <Opening />
      <Activities />
    </div>
  );
}

export default App;
