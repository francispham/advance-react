import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    id: '1',
    name: 'Francis',
    email: 'francis.pham.ca@gmail.com',
  })

  return (
    <UserContext.Provider
      value={{
        user: state,
        logout: () => {
          setState({
            ...state,
            id: null,
            name: '',
            email: '',
          })
        },
        login: () => {
          setState({
            ...state,
            id: 1,
            name: 'Francis',
            email: 'francis.pham.ca@gmail.com',
          })
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserState = () => useContext(UserContext);