import React, { createContext } from 'react';
import { useToggle } from '../hooks';

export const AppContext = createContext({
  isMenuOpen: false
});

const PageWrapper = ({ children }) => {
  const { isToggled, toggle } = useToggle(false);

  return (
    <AppContext.Provider
      value={{
        isMenuOpen: isToggled,
        toggleMenu: toggle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default PageWrapper;