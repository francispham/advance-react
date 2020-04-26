import React from 'react';
import styled from 'styled-components';
import { useAppState } from '../state';
import { useScrollFreeze } from '../hooks';

import { Button } from 'Elements';

const NavWrapper = () => {
  const { isMenuOpen } = useAppState();
  if (!isMenuOpen) return null;
  return <Nav />
}
const Nav = () => {
  const { isMenuOpen, toggleMenu } = useAppState();
  useScrollFreeze();

  if(!isMenuOpen) return null;
  return (
    <Navigation>
      <h1>Hello</h1>
      <Button onClick={toggleMenu}>Close</Button>
    </Navigation>
  );
};

export default NavWrapper;

const Navigation = styled.nav`
  background: var(--black);
  color: white;
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  right: 0;
`;