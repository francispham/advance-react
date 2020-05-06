import React, { createContext, useContext } from 'react';
import { useToggle } from '../hooks';

export const AppContext = createContext({
  isMenuOpen: false
});

export const PageWrapper = ({ children }) => {
  const { isToggled, toggle } = useToggle(false);
  // const { isToggled, toggle, x } = useToggle(false);       => With React Spring Only

  return (
    <AppContext.Provider
      value={{
        isMenuOpen: isToggled,
        toggleMenu: toggle,
        // x: x,        => With React Spring Only
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => useContext(AppContext);
