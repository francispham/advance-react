import React, { useState, useRef } from 'react'
import { animated, useTrail, useSpring, useChain } from "react-spring";

import { ChainBoxes } from "./Elements";

const items = [0.5, 0.3, 0.2, 0.7, 1];

const Chain = () => {
  const [on, toggle] = useState(false);

  const springRef = useRef();
  const { size } = useSpring({
    ref: springRef,
    from: { size: '20%' },
    to: { size: on ? '97.5%' : '20%' }
  });

  const transitionRef = useRef();
  const trail = useTrail(items.length, {
    ref: transitionRef,
    from: {
      opacity: 0,
      transform: "scale(0)",
    },
    to: {
      opacity: on ? 1 : 0,
      transform: on ? "scale(1)" : "scale(0)",
    },
  });

  useChain(on ? [springRef, transitionRef] : [transitionRef, springRef]);

  return (
    <div style={{height: '100vh'}}>
      <ChainBoxes 
        style={{ width: size, height: size }}
        onClick={() => toggle(!on)}
      >
        {trail.map((animation) => (
          <animated.div style={animation} />
        ))}
      </ChainBoxes>
    </div>
  );
}

export default Chain
