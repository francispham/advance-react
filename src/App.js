import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { UserContext } from './UserContext';
import User from './User';

// Absolute Imports:
import { Toggle, Portal } from 'Utilities';
import { Modal, Button } from 'Elements';


class UserProvider extends Component {
  state = {
    id: '1',
    name: 'Francis',
    email: 'francis.pham.ca@gmail.com'
  }

  logout = () => {
    this.setState({
      id: null,
      name: '',
      email: ''
    })
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state,
          logout: this.logout
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    )
  }
};

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
    </UserProvider>
  );
}

export default App;
