import React from 'react';

import { useInc } from '../hooks';

import { Button } from 'Elements';

const Inc = () => {
  const [volume, { inc, dec, reset }] = useInc({
    maxValue: 10,
    minValue: 0,
    initial: 10,
  });

  return (
    <div>
      <h3>Volume</h3>
      <Button onClick={dec}>-</Button>
      {volume}
      <Button onClick={inc}>+</Button>
      <Button onClick={reset}>Reset Volume</Button>
    </div>
  );
};

export default Inc;
