import React, { useState, useRef } from 'react'
import { animated, useSpring, useChain, useTransition } from 'react-spring';

import { TranBoxes } from "./Elements";

const items = [0.5, 0.3, 0.2, 0.7, 1, 2, 3, 4];

const Chain = () => {
  const [on, toggle] = useState(false);

  const springRef = useRef();
  const { size } = useSpring({
    ref: springRef,
    from: { size: '20%' },
    to: { size: on ? '97.5%' : '20%' }
  });

  const transitionRef = useRef();
  const transition = useTransition(on ? items : [], item => item, {
    ref: transitionRef,
    trail: 400/ items.length,
    from: {
      opacity: 0,
      transform: "scale(0)",
    },
    enter: {
      opacity: 1,
      transform: "scale(1)",
    },
    leave: {
      opacity: 0,
      transform: "scale(0)",
    },
  });

  useChain(on ? [springRef, transitionRef] : [transitionRef, springRef]);

  return (
    <div style={{ height: "100vh", marginBottom: "1rem" }}>
      <TranBoxes
        style={{ width: size, height: size }}
        onClick={() => toggle(!on)}
      >
        {transition.map(({ item, key, props }) => (
          <animated.div key={key} style={props} />
        ))}
      </TranBoxes>
    </div>
  );
}

export default Chain
