import styled from 'styled-components';
import { animated } from 'react-spring';

export const Box = styled(animated.div)`
  background: var(--teal);
  height: 100px;
  width: 100px;
  margin: 0 auto;
`;

export const FlexBoxes = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;

  div {
    margin: 20px;
  }
  button {
    height: max-content;
  }
`;

export const GesturesBox = styled.div`
  display: grid;
  min-height: 100vh;
`;

export const ChainBoxes = styled(animated.div)`
  display: grid;
  padding: 1rem;
  grid-gap: 20px;
  background: var(--purp);
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  div {
    background: var(--black);
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }
`;

export const TranBoxes = styled(animated.div)`
  display: grid;
  padding: 1rem;
  grid-gap: 20px;
  background: whitesmoke;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  div {
    background: var(--green);
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }
`;