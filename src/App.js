import React from 'react';
import logo from './logo.svg';
import './App.css';

import Toggle from './ToggleRPC';

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
      <Toggle>
        {({ on, toggle }) => (
          <> {/* This syntax replaces React <Fragment>: cleaner code that not showing <div> tag.*/}
            {on && <h1>Show Me</h1>}   {/* Similar Syntax: <Component on={on} /> */}
            <button onClick={toggle}>Show/Hide</button>
          </>
        )}
      </Toggle>
    </div>
  );
}

export default App;
