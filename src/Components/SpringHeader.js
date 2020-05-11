import React from "react";
import { animated } from "react-spring";

import { useToggle } from "../hooks";
import { Button } from "Elements";

const SpringHeader = () => {
  const { toggle, color, y, bottom, transition } = useToggle();

  return (
    <header>
      <div style={{ position: 'relative', textAlign: 'center' }}>
        {transition.map(({ item, props }) =>
          item ? (
            <animated.h2 style={props}>Hello</animated.h2>
          ) : (
            <animated.h2 style={props}>Hi</animated.h2>
          )
        )}
      </div>
      <animated.h1 
        style={{
          color,
          fontSize: "3rem",
          paddingTop: "1rem",
          paddingBottom: bottom.interpolate(bottom => `${bottom}rem`),
          transform: y
            .interpolate({
              range: [0, 0.25, 0.5, 0.75, 1],
              output: [0, -25, -50, 100, -50]
            })
            .interpolate(y => `translate3d(0, ${y}px, 0)`),
        }}
      >
        React Advance
      </animated.h1>
      <Button onClick={toggle}>React Spring</Button>
    </header>
  );
};

export default SpringHeader;