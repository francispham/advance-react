import React from 'react';
import './App.css';

import Menu from "./Menu";

import UserComponent from './User/';

// Absolute Imports:
import { Toggle, Portal, } from 'Utilities';
import { 
  Button, Header, Container, Card, CardGrid } from 'Elements';
import { blue, purp, black, green, } from 'Backgrounds';

function App() {
  return (
    <div className="App">
      <Header>
        <Menu />
        <h1>Header</h1>
      </Header>
      <section>
        <h2>Choose Your Option</h2>
        <Button>User Info</Button> <Button>Cool Cards</Button>
      </section>
      <UserComponent />
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
      </section>{" "}
      <Container>
        <h2>Super Cool</h2>
        <CardGrid>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img alt={purp} src={purp} />
          </Card>
          <Card style={{ background: "var(--blue)" }}>
            <h3>Some card</h3>
            <img alt={blue} src={blue} />
          </Card>
          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img alt={black} src={black} />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img alt={green} src={green} />
          </Card>
        </CardGrid>
      </Container>
    </div>
  );
}

export default App;
