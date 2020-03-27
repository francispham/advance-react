import React from 'react';
import logo from './logo.svg';
import './App.css';

import UserProvider from './UserProvider';

import User from './User';

// Absolute Imports:
import { Toggle, Portal } from 'Utilities';
import { Modal, Button } from 'Elements';

function App() {
  return (
    <UserProvider>
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
        <User />
        <br />
        <Toggle>
          {({ on, toggle }) => (
            <>
              <Button onClick={toggle}>Login</Button>
              <Modal on={on} toggle={toggle}>
                <h1>In Modal</h1>
              </Modal>
            </>
          )}
        </Toggle>
        <br />
        <br />
        <section>
          <Toggle>
            {({ on, toggle }) => (
              <>
                {" "}
                {/* This syntax replaces React <Fragment>: cleaner code that not showing <div> tag.*/}
                {on && <h1>Show Me</h1>}{" "}
                {/* Similar Syntax: <Component on={on} /> */}
                <Button onClick={toggle}>Show/Hide</Button>
                <Portal>{on && <h1>Hi, I am in A Portal</h1>}</Portal>
              </>
            )}
          </Toggle>
        </section>
      </div>
    </UserProvider>
  );
}

export default App;
