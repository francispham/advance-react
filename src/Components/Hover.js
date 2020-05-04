import React from 'react';

import { Card } from 'Elements';
import { green } from "Backgrounds";

import { useHover, useWindowWidth, useMeasure } from '../hooks';

const Hover = () => {
  const [ isHovered, bind ] = useHover();
  const [ {ref}, bounds ] = useMeasure();
  console.log('Bounds: ', bounds);

  const width = useWindowWidth();
  if (width < 500) return null;


  return (
    <div>
      <Card
        ref={ref}
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