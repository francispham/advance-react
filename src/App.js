import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import './App.css';

import { PageWrapper } from './state';

import Nav from './components/Nav';
import Hover from './components/Hover';
import Inc from './components/Inc';
import Menu from './components/Menu';
import User from './components/User';
import CoolCards from './components/CoolCards';

// Absolute Imports: (Does not Need Directory)
import { Toggle, Portal, Mount } from 'Utilities';
import { Button, Header } from 'Elements';

function App() {
  return (
    <PageWrapper>
      <Router>
        <div className="App">
          <Header>
            <Menu />
            <h1>Header</h1>
          </Header>
          
          <Nav />

          <main>
            <h1>React Advance</h1>
            <section>
              <Link to="/user">
                <Button>User Account</Button>
              </Link>
              <Link to="/coolCards">
                <Button>CoolCards</Button>
              </Link>
              <Switch>
                <Route exact path="/" />
                <Route exact path="/coolCards" component={CoolCards} />
                <Route exact path="/user" component={User} />
              </Switch>
            </section>
            <section>
              <Inc />
            </section>
            <section>
              <Mount />
            </section>
            <section>
              <Hover />
            </section>


          </main>

          <footer>
            <Toggle>
              {({ isToggled, toggle }) => (
                <>
                  {isToggled && <Link to="/"><h1>Back Home</h1></Link>}
                  <Button onClick={toggle}>
                    Show/Hide
                  </Button>
                  <Portal>{isToggled && <h1>Hi, I am in A Portal</h1>}</Portal>
                </>
              )}
            </Toggle>
          </footer>
        </div>
      </Router>
    </PageWrapper>
  );
};

export default App;
