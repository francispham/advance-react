import React, { createContext, useContext } from 'react';
import { useToggle } from '../hooks';
import { useTransition } from 'react-spring';

export const AppContext = createContext({
  isMenuOpen: false
});

export const PageWrapper = ({ children }) => {
  const { isToggled, toggle } = useToggle(false);
  const transition = useTransition(isToggled, null, {  // 'null' because there's only One Key!
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
  });

  return (
    <AppContext.Provider
      value={{
        isMenuOpen: isToggled,
        toggleMenu: toggle,
        transition: transition,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => useContext(AppContext);
