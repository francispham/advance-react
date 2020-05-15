import React from 'react'

import Accordion from '../components/Accordion';
import Waypoints from '../components/Waypoints';
import SpringHeader from '../components/SpringHeader';

import { Button } from '../components/Elements';
import { Toggle } from '../components/Utilities';

const ReactSpring = () => {
  return (
    <div>
      <Toggle>
        {({ isToggled, toggle }) => (
          <div>
            <Button onClick={toggle}>Spring Animating</Button>
            {isToggled && <SpringHeader />}
          </div>
        )}
      </Toggle>
      <Accordion />
      <Toggle>
        {({ isToggled, toggle }) => (
          <div>
            <Button onClick={toggle}>Waypoints</Button>
            {isToggled && <Waypoints />}
          </div>
        )}
      </Toggle>
    </div>
  );
}

export default ReactSpring;