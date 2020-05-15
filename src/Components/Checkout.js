import React from 'react';
import styled from "styled-components";
import { animated } from 'react-spring';

import { fixed } from "./Utilities/position";


const Checkout = ({ x, isOpen }) => {
  return (
    <CheckoutPage isOpen={isOpen}>
      <animated.div 
        style={{ transform: x.interpolate((x) => `translate3d(${x * -1}%, 0, 0)`) }}          
        className="checkout-left"
      />
      <animated.div 
        style={{ transform: x.interpolate((x) => `translate3d(${x}%, 0, 0)`) }}          
        className="checkout-right"
      />
    </CheckoutPage>
  )
}

export default Checkout;

const CheckoutPage = styled.div`
  ${fixed({
    y: "top",
    x: "left",
    b: "bottom",
    r: "right",
  })};
  z-index: 10;
  display: flex;
  pointer-events: ${(props) => (props.isOpen ? "all" : "none")};

  .checkout-left {
    width: 30%;
    height: 100%;
    background: var(--xtraPurp);
  }
  .checkout-right {
    width: 70%;
    height: 100%;
    background: var(--purp);
  }

  button {
    appearance: none;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    background: none;
    border: none;
  }
`;