import styled from 'styled-components';
import { animated } from 'react-spring';

export const Box = styled(animated.div)`
  background: var(--teal);
  height: 100px;
  width: 100px;
  margin: 0 auto;
`;

export const FlexBoxes = styled.div`
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