import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import './App.css';

import { PageWrapper } from './state';

import SpringHeader from './components/SpringHeader';
import Theme from './components/Theme';
import Local from './components/Local';
import Script from './components/Script';
import Cookie from './components/Cookie';
import Nav from './components/Nav';
import Hover from './components/Hover';
import Inc from './components/Inc';
import Menu from './components/Menu';
import User from './components/User';
import CoolCards from './components/CoolCards';

// Absolute Imports: (Does not Need Directory)
import { Toggle, Portal, Mount } from 'Utilities';
import { Button, Header, Container } from 'Elements';

function App() {
  return (
    <PageWrapper>
      <Router>
        <div className="App">
          <Header>
            <Nav />
            <Menu />
          </Header>
          <Container>
            <SpringHeader />
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
              <Theme />
            </section>
            <section>
              <Local />
            </section>
            <section>
              <Script />
            </section>
            <section>
              <Cookie />
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
          </Container>

          <footer>
            <Toggle>
              {({ isToggled, toggle }) => (
                <>
                  {isToggled && (
                    <Link to="/">
                      <h1>Back Home</h1>
                    </Link>
                  )}
                  <Button onClick={toggle}>Show/Hide</Button>
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
