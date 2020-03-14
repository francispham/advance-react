import React from 'react';
import logo from './logo.svg';
import './App.css';

import Toggle from './ToggleRenderProps';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Toggle 
        render={({on, toggle}) => (
          <div>
            {on && <h1>Show Me</h1>}
            <button onClick={toggle}>Show/Hide</button>
          </div>
        )} 
      />
      <br />
      <Toggle 
        render={({on, toggle}) => (
          <div>
            {on && <h1>Nav Item</h1>}
            <button onClick={toggle}>Menu</button>
          </div>
        )} 
      />
    </div>
  );
}

export default App;
