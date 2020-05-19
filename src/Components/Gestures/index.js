import React from 'react'

import Gesture from './Gesture';
import GestureX from './GestureX';
import { GesturesBox } from '../Elements'

const index = () => {
  return (
    <div>
      <h1>React Gestures</h1>
      <GesturesBox>
        <GestureX />
        <Gesture />
      </GesturesBox>
    </div>
  )
}

export default index;