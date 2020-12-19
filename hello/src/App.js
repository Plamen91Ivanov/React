import React from 'react'
import logo from './logo.svg';
import LearnReact from './LearnReact';
import Code from './Code';
import './App.css';

function App() {

  const renderResult = (a,b) => {
    return a + b
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <Code>src/App.js</Code> and save to reload.
        </p>
        <p>Result: {renderResult(2,2)}</p>
        <LearnReact />
      </header>
    </div>
  );
}

export default App;
