import { useState } from 'react';
import { useSpring } from "react-spring";

export const useToggle = initial => {
  const [ isToggled, setToggle ] = useState(initial);
  const toggle = () => setToggle(prevState => !prevState);
  const { color, bottom, y } = useSpring({
    color: isToggled ? "green" : "red",
    y: isToggled ? 0 : 50,
    bottom: isToggled ? 0 : 3,
    // fontSize: isToggled ? "3rem" : "7em",
    // opacity: isToggled ? 1 : 0.5,
    // transform: isToggled ? "translate3d(0,0,0)" : "translate3d(250px,0,0)",
  });

  // If Needed to Rename Output, use this multiple uses of hook:
  // return [isToggled, setToggle, toggle];

  // Named properties, no order in return:
  return { isToggled, setToggle, toggle, color, bottom, y };
};
