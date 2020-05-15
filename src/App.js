import React from 'react';

import './App.css';

import { PageWrapper } from './state';

import Accordion from './components/Accordion';
import Routes from './Routes';
import Checkout from './components/Checkout';
import SpringHeader from './components/SpringHeader';
import Theme from './components/Theme';
import Local from './components/Local';
import Script from './components/Script';
import Cookie from './components/Cookie';
import Nav from './components/Nav';
import Hover from './components/Hover';
import Inc from './components/Inc';
import Menu from './components/Menu';

import { Toggle, Mount } from './components/Utilities';
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
          <SpringHeader />
          <Accordion />

          <main>
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
          </main>
          
          <Routes />
        </Container>
      </div>
    </PageWrapper>
  );
};

export default App;
