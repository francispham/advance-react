import React from 'react';

import { useMount, useUnmount } from '../../hooks/useMount';
import { useToggle } from '../../hooks/useToggle';

import { Button } from 'Elements';

const Mount = () => {
  const { isToggled, toggle } = useToggle();
  return (
    <div>
      <h3>Mount Vs Unmount Components</h3>
      {isToggled && <UnMount />} <br />
      <Button onClick={toggle}>Toggle</Button>
    </div>
  );
};

export const UnMount = () => {
  useMount(() => {
    console.log('I Mounted!');
  });

  useUnmount(() => {
    console.log('I Unmounted!');
  });

  return <div>Unmount This!!!</div>
};

export default Mount;