import React from 'react'
import styled from 'styled-components';
import { useGesture } from 'react-with-gesture';
import { animated, useSpring } from 'react-spring';

const Gesture = () => {
  const [ { xy }, set ] = useSpring(() => ({ xy: [0, 0] }));
  /* 
  const bind = useGesture((value) => {
    console.log('***(value): ', (value));
  };
  */
  const bind = useGesture(({ down, delta }) => {
    set({ xy: down ? delta : [0,0] });
  });

  return <Box 
            style= {{
              transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0)`)
            }}
            {...bind()} 
          />
};

export default Gesture;

const Box = styled(animated.div)`
  background: var(--teal);
  height: 100px;
  width: 100px;
  margin: 0 auto;
`;