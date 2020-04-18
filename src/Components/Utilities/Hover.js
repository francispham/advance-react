import React, { useState, useMemo } from 'react';

import { Card } from 'Elements';
import { green } from "Backgrounds";

const Hover = () => {
  const [ isHovered, setIsHovered ] = useState(false);
  console.log("isHovered: ", isHovered);

  const bind = useMemo(() => {
    return {
      onMouseOver: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
    }
  }, [])

  return (
    <div>
      <Card {...bind} style={{ background: "var(--green)" }}>
        <h3>Some card</h3>
        <img alt={green} src={green} />
      </Card>
    </div>
  )
};

export default Hover;