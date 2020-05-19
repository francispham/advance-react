import React from 'react'
import { useGesture } from 'react-with-gesture';
import { useSpring } from 'react-spring';

import { Box } from '../Elements';

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