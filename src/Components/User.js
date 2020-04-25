import React from "react";

import { UserProvider, useUserState } from "../state";

// Absolute Imports: (Does not Need Directory)
import { Toggle, } from "Utilities";
import { Modal, Button } from "Elements";

function UserComponent() {
  return (
    <UserProvider>
      <User />
      <Toggle>
        {({ isToggled, toggle }) => (
          <>
            <Button onClick={toggle}>Login</Button>
            <Modal isToggled={isToggled} toggle={toggle}>
            <h1>In Modal</h1>
            </Modal>
          </>
        )}
      </Toggle>
    </UserProvider>
  )
};

const User = () => {
  const { user, logout } = useUserState();

  return (
    <div>
      <h1>User Info</h1>
      <h3>{user.name}</h3>
      <h4>{user.email}</h4>
      <Button onClick={logout}>Logout</Button>
    </div>
  )
};

export default UserComponent;