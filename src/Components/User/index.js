import React from "react";

import User from "./User";
import UserProvider from "./UserProvider";

// Absolute Imports: (Does not Need Directory)
import { Toggle, } from "Utilities";
import { Modal, Button } from "Elements";

function UserComponent() {
    return (
        <UserProvider>
            <User />
            <br />
            <Toggle>
                {({ on, toggle }) => (
                <>
                    <Button onClick={toggle}>Login</Button>
                    <Modal on={on} toggle={toggle}>
                    <h1>In Modal</h1>
                    </Modal>
                </>
                )}
            </Toggle>
        </UserProvider>
    )
};

export default UserComponent;