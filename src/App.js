import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import './App.css';

import Inc from './components/Inc';
import Menu from './components/Menu';
import UserComponent from './components/User';
import CoolCards from './components/CoolCards';

// Absolute Imports: (Does not Need Directory)
import { Toggle, Portal, } from 'Utilities';
import { Button, Header } from 'Elements';

function App() {
  return (
    <Router>
      <div className="App">
        <Header>
          <Menu />
          <h1>Header</h1>
        </Header>
        <section>
          <h2>Choose Your Option</h2>
          <Link to="/user">
            <Button>User Account</Button>
          </Link>{" "}
          <Link to="/coolCards">
            <Button>CoolCards</Button>
          </Link>
        </section><br />
        <section>
          <Inc />
        </section>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/coolCards" component={CoolCards} />
          <Route exact path="/user" component={UserComponent} />
        </Switch>

        <footer>
          <Toggle>
            {({ on, toggle }) => (
              <>
                {" "}
                {/* This syntax replaces React <Fragment>: cleaner code that not showing <div> tag.*/}
                {on && <Link to="/"><h1>Back Home</h1></Link>}
                <br />
                {/* Similar Syntax: <Component on={on} /> */}
                <Button style={{ margin: "1rem" }} onClick={toggle}>
                  Show/Hide
                </Button>
                <Portal>{on && <h1>Hi, I am in A Portal</h1>}</Portal>
              </>
            )}
          </Toggle>
        </footer>
      </div>
    </Router>
  );
}

export default App;
