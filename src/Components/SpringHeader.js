import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

import { useToggle } from '../hooks';
import { Button } from './Elements';

const SpringHeader = () => {
  const { toggle, color, y, bottom, transition } = useToggle();

  const [items, setItems] = useState([
    {
      number: 1,
      key: 1
    },
    {
      number: 2,
      key: 2
    },
    {
      number: 3,
      key: 3
    },
    {
      number: 4,
      key: 4
    },
  ]);
  const transitions = useTransition(items, item => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <header>
      <div style={{ position: 'relative', textAlign: 'center' }}>
        {transition.map(({ item, key, props }) =>
          item ? (
            <animated.h2 key={key} style={props}>Hello</animated.h2>
          ) : (
            <animated.h2 key={key} style={props}>Hi</animated.h2>
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

      <Button onClick={toggle}>
          React Spring
      </Button>
      <Button onClick={
        () => setItems([{
          number: 3,
          key: 3
        }])
      }>
        React Spring Transition Multi Comps
      </Button>
      <div style={{ fontSize: '5rem'}}>
        {
          transitions.map(({ item, key, props }) => (
            <animated.span style={props} key={key}>
              {item.number}
            </animated.span>
          ))
        }
      </div>
    </header>
  );
};

export default SpringHeader;