import React from 'react'

import ChainTran from '../components/ChainTran';
import Chain from '../components/Chain';
import Boxes from '../components/Boxes';
import Accordion from '../components/Accordion';
import Waypoints from '../components/Waypoints';
import Gestures from '../components/Gestures/index';
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
      <ChainTran />
      <div>
        <h1>Full Feature with useTransition, useChain & useSpring</h1>
        <Chain />
        <h1>Feature with useTrail & useChain</h1>
        <Boxes />
      </div>
      <Gestures />
    </div>
  );
}

export default ReactSpring;