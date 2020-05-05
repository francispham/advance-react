import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

import { useAppState } from '../state';
import { useScrollFreeze } from '../hooks';

import { Button } from 'Elements';
import { Link } from 'react-router-dom';


const Nav = () => {
  const { isMenuOpen, toggleMenu, x } = useAppState();
  const scrollFreeze = useScrollFreeze;
  if(isMenuOpen) {scrollFreeze()}
  // useScrollFreeze();     => Use this with NavWrapper
  return (
    <Navigation
      style={{
        transform: x.interpolate((x) => `translate3d(${x}%, 0, 0)`),
      }}
    >
      <nav>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Story</Link>
        <Link>Contact</Link>
      </nav>
      <Button onClick={toggleMenu}>Close</Button>
    </Navigation>
  );
};

export default Nav; //This Approach is for implementing React Spring Only!

/* For React Spring to work, NavWrapper below should not be used,
because this line `if (!isMenuOpen) return null;` will make Nav
Component disappeared, and therefore, the Animation when closing
Side Nav doesn't work:

const NavWrapper = () => {
  const { isMenuOpen } = useAppState();
  if (!isMenuOpen) return null;
  return <Nav />;
}

export default NavWrapper;
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