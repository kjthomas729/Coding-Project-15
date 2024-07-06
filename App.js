import React from 'react';
import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <PersonalInfo />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
};

export default App;