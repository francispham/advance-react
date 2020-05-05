import React, { createContext, useContext } from 'react';
import { useToggle } from '../hooks';

export const AppContext = createContext({
  isMenuOpen: false
});

export const PageWrapper = ({ children }) => {
  const { isToggled, toggle, x } = useToggle(false);

  return (
    <AppContext.Provider
      value={{
        isMenuOpen: isToggled,
        toggleMenu: toggle,
        x: x,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => useContext(AppContext);
