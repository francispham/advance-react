import React from 'react';

import './App.css';

import { PageWrapper } from './state';

import Routes from './Routes';

import Nav from './components/Nav';
import Menu from './components/Menu';
import Checkout from './components/Checkout';

import { Toggle } from './components/Utilities';
import { Header, Container } from './components/Elements';

function App() {
  return (
    <PageWrapper>
      <div className="App">
        <Nav />
        <Header>
          <Menu />
          <Toggle>
            {({ toggle, isToggled, x }) => (
              <>
                <Checkout isOpen={isToggled} x={x} />
                <button onClick={toggle}>Checkout</button>
              </>
            )}
          </Toggle>
        </Header>
        <Container>
          <h1 style={{ fontSize: "3rem", color: "darkGreen" }}>REACT ADVANCE</h1>
          <Routes />
        </Container>
      </div>
    </PageWrapper>
  );
};

export default App;
