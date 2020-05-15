import React from 'react';

import { UserProvider, useUserState } from '../state';

// Absolute Imports: (Does not Need Directory)
import { Toggle, } from '../components/Utilities';
import { Modal, Button } from '../components/Elements';

function User() {
  return (
    <UserProvider>
      <UserComponent />
    </UserProvider>
  )
};

const UserComponent = () => {
  const { user, logout, login } = useUserState();

  return (
    <div>
      <h1>User Info</h1>
      <h3>{user.name}</h3>
      <h4>{user.email}</h4>
      <Button onClick={logout}>Logout</Button>
      <Toggle>
        {({ isToggled, toggle }) => (
          <>
            <Button 
              onClick={() => {toggle(); login()}}
            >
              Login
            </Button>
            <Modal isToggled={isToggled} toggle={toggle}>
              <h1>In Modal</h1>
            </Modal>
          </>
        )}
      </Toggle>
    </div>
  )
};

export default User;