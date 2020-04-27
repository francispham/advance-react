import React from 'react';

import { Card } from 'Elements';
import { green } from "Backgrounds";

import { useHover, useWindowWidth } from '../hooks';

const Hover = () => {
  const [ isHovered, bind ] = useHover();
  const width = useWindowWidth();
  console.log('Width: ', width);
  if (width < 500) return null;

  return (
    <div>
      <Card 
        {...bind}
        style={{ background: isHovered ? "var(--black)" : "var(--green)" }}
      >
        <h3>Some card</h3>
        <img alt={green} src={green} />
      </Card>
    </div>
  )
};

export default Hover;