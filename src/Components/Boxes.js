import React from 'react'
import styled from "styled-components";
import { useSprings } from "react-spring";

import { Box } from './Gestures/Gesture'

const items = [0.4, 0.6, 0.8, 1];

const Boxes = () => {
  const springs = useSprings(
    items.length, 
    items.map(item => ({
      from: {
        opacity: 0
      },
      to: {
        opacity: item
      }
    })) 
  );

  return (
    <BoxesGrid>
      {springs.map(animation => <Box style={animation}/>)}
    </BoxesGrid>
  );
}

export default Boxes;

const BoxesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
`;
