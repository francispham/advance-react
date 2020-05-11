import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

import { useAppState } from '../state';
import { useScrollFreeze } from '../hooks';

import { Button } from 'Elements';


const Nav = () => {
  const { isMenuOpen, toggleMenu } = useAppState();
  // const { isMenuOpen, toggleMenu, x } = useAppState();    => With React Spring Only
  useScrollFreeze();
  if(!isMenuOpen) return null;
  return (
    <Navigation
      // style={{           => With React Spring Only
      //   transform: x.interpolate((x) => `translate3d(${x}%, 0, 0)`),
      // }}
    >
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

// Do not need for React Spring
const NavWrapper = () => {
  const { isMenuOpen } = useAppState();
  if (!isMenuOpen) return null;
  return <Nav />;
}

export default NavWrapper;

/* For React Spring to work:
export default Nav;
*/


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