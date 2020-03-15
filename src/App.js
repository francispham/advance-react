import React from 'react';
import styled from "styled-components";
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
            <Button onClick={toggle}>Login</Button>
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
            <Button onClick={toggle}>Show/Hide</Button>
            <Portal>{on && <h1>Hi, I am in A Portal</h1>}</Portal>
          </>
        )}
      </Toggle>
    </div>
  );
}

export default App;

const Button = styled.button`
  display: inline-block;
  text-transform: uppercase;
  background: #f8f5f1;
  padding: 10px 40px;
  color: #333;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 400;
  box-shadow: 0 2px 10px rgba(50, 50, 73, 0.2),
    0 37.5px 75px -5px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #fbc89d;
  }
`;