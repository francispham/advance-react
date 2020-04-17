import React from 'react'

import { useInc } from '../hooks/useInc';

import { Button } from 'Elements';

const Inc = () => {
  const [ value, { inc, dec } ] = useInc();

  return (
    <div>
      <Button onClick={dec}>-</Button>
      {' '}{value}{' '}
      <Button onClick={inc}>+</Button>
    </div>
  )
}

export default Inc;
