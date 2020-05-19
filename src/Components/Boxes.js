import React, { useState } from 'react'
import { useSprings, useTrail } from "react-spring";

import { Button } from './Elements'
import { Box, FlexBoxes } from "./Elements";

const items = [0.4, 0.6, 0.8, 1];

const Boxes = () => {
  const [ on, toggle ] = useState(false);

  const trail = useTrail(items.length, {
    opacity: on ? 0 : 1,
    transform: on ? 'scale(0.3)' : 'scale(1)'
  });

  const springs = useSprings(
    items.length,
    items.map((item) => ({
      from: {
        opacity: 0,
        transform: "scale(0)",
      },
      to: {
        opacity: item,
        transform: `scale(${item})`,
      },
    }))
  );

  return (
    <FlexBoxes>
      <div>
        {trail.map((animation, items) => <Box key={items} style={animation}/>)}
      </div>
      <Button onClick={() => toggle(!on)}>Trail Animation</Button>
      <div>
        {springs.map((animation, items) => <Box key={items} style={animation}/>)}
      </div>
    </FlexBoxes>
  );
}

export default Boxes;

