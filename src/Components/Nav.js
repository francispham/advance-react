import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

import { useAppState } from '../state';
// import { useScrollFreeze } from '../hooks';

import { Button } from './Elements';
import { fixed } from "./Utilities/position";

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
  ${fixed({
    y: "top",
    x: "left",
    r: "right",
    b: "bottom",
  })};
  padding: 100px;

  a {
    color: white;
    display: block;
    font-size: 4rem;
    text-align: left;
    text-decoration: none;
    transition: 0.3s ease border;
    border-bottom: solid 4px transparent;
  }
  a:hover {
    border-bottom: solid 4px var(--teal);
  }
`;