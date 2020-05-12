import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

import { useAppState } from '../state';
// import { useScrollFreeze } from '../hooks';

import { Button } from './Elements';

const NavWrapper = () => {
  const { toggleMenu, transition } = useAppState();

  return transition.map(
    ({ item, key, props }) =>
      item &&
        <Navigation key={key} style={props}>
          <nav>
            <a href="/#">Home</a>
            <a href="/#">About</a>
            <a href="/#">Story</a>
            <a href="/#">Contact</a>
          </nav>
          <Button onClick={toggleMenu}>Close</Button>
        </Navigation>
  );
};

export default NavWrapper;


const Navigation = styled(animated.nav)`
  background: var(--black);
  color: white;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  padding: 100px;

  a {
    display: block;
    text-align: left;
    font-size: 4rem;
    color: white;
    text-decoration: none;
    transition: 0.3s ease border;
    border-bottom: solid 4px transparent;
  }
  a:hover {
    border-bottom: solid 4px var(--teal);
  }
`;