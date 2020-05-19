import React from 'react'
import { useGesture } from 'react-with-gesture';
import { useSpring } from 'react-spring';

import { Box } from "../Elements";

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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'none',
        border: 'groove',
        fontSize: '7rem',
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