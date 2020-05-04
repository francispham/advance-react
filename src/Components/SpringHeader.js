import React from "react";
import { animated } from "react-spring";

import { useToggle } from "../hooks";
import { Button } from "Elements";

const SpringHeader = () => {
  const { toggle, color, y, bottom } = useToggle();
  return (
    <header>
      <animated.h1 
        style={{
          color,
          fontSize: "3rem",
          paddingBottom: bottom.interpolate(bottom => `${bottom}rem`),
          transform: y.interpolate(y => `translate3d(0, ${y}px, 0)`),
        }}
      >
        React Advance
      </animated.h1>
      <Button onClick={toggle}>React Spring</Button>
    </header>
  );
};

export default SpringHeader;