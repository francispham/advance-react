import { useState } from 'react';

export const useToggle = initial => {
  const [ isToggled, setToggle ] = useState(initial);
  const toggle = () => setToggle(prevState => !prevState);
  // If Needed to Rename Output, use this multiple uses of hook:
  // return [isToggled, setToggle, toggle];

  // Named properties, no order in return:
  return { isToggled, setToggle, toggle };
};
