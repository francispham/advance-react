import React from 'react'
import styled from 'styled-components';
import { useGesture } from 'react-with-gesture';
import { animated, useSpring } from 'react-spring';

const Gesture = () => {
  const [ { x }, set ] = useSpring(() => ({ x: 0 }));

  const bind = useGesture(({ down, delta }) => {
    if (down) {
      set({ x: delta[0] });
    } else {
      if (delta[0] > 400) {
        set({ x: 500 });
      } else if (delta[0] < -400) {
        set({ x: -500 });
      } else {
        set({ x: 0 });
      };
    };
  });

  return (
    <Box 
      style= {{
        opacity: x.interpolate({ 
          map: Math.abs,  // Apply the Effect on the Left Side
          range: [0, 400], 
          output: [1, 0] 
        }),
        transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`)
      }}
      {...bind()} 
    >X</Box>
  );
};

export default Gesture;

const Box = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border: groove;
  font-size: 7rem;
`;