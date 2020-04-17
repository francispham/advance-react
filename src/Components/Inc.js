import React, { useState } from 'react'

import { Button } from 'Elements';

const Inc = () => {
  const [ value, setValue ] = useState(0);

  return (
    <div>
      <Button onClick={() => setValue(prevSate => prevSate - 1)}>-</Button>
      {' '}{value}{' '}
      <Button onClick={() => setValue(prevSate => prevSate + 1)}>+</Button>
    </div>
  )
}

export default Inc;
