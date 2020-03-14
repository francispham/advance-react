import React from 'react';
import logo from './logo.svg';
import './App.css';

import Toggle from './ToggleRPC';
import Portal from './Portal';
import Modal from './Modal';

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
      <br />
      <Toggle>
        {({ on, toggle }) => (
          <>
            <button onClick={toggle}>Login</button>
            <Modal on={on} toggle={toggle}>
              <h1>In Modal</h1>
            </Modal>
          </>
        )}
      </Toggle>
      <br />
      <br />
      <Toggle>
        {({ on, toggle }) => (
          <>
            {" "}
            {/* This syntax replaces React <Fragment>: cleaner code that not showing <div> tag.*/}
            {on && <h1>Show Me</h1>}{" "}
            {/* Similar Syntax: <Component on={on} /> */}
            <button onClick={toggle}>Show/Hide</button>
            <Portal>{on && <h1>Hi, I am in A Portal</h1>}</Portal>
          </>
        )}
      </Toggle>
    </div>
  );
}

export default App;
