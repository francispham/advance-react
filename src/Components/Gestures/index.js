import React from 'react'
import styled from "styled-components";
import Gesture from './Gesture';
import GestureX from './GestureX';

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

const GesturesBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  min-height: 100vh;
`;