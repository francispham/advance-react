import React, { useState } from 'react'
import styled from "styled-components";
import { useSpring, animated } from 'react-spring';

import { useMeasure } from '../hooks';
import { Button } from './Elements/Button';

const Accordion = () => {
  const [ on, toggle ] = useState(false);

  const [ bind, { height, top } ] = useMeasure();
  console.log('Heigh & Top: ', height, top);
  /*  Before Refactoring measure:
  const [ bind, measure ] = useMeasure();
  console.log('Heigh: ', measure.height);
  */ 
  const animation = useSpring({
    overflow: 'hidden',
    height: on ? height + top * 2 : 0
  })

  return (
    <AccordionDiv>
      <h1>
        <Button onClick={() => toggle(!on)}>Accordion</Button>
      </h1>
      <animated.div style={animation}>
        <div {...bind}>
            Hello, Animating this Accordion with React Spring, Please
        </div>
      </animated.div>
    </AccordionDiv>
  );
};

export default Accordion;

const AccordionDiv = styled.div`
  div div {
    background: white;
    color: black;
    padding: 20px;
    border: solid 1px #eee;
    overflow: hidden;
  }
`;