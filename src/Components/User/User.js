import React, { Component } from 'react';

// Absolute Imports: (Does not Need Directory)
import { Button } from 'Elements';

import { UserContext } from './UserContext';

export default class User extends Component {
    render() {
        return (
            <UserContext.Consumer>
                {context => (
                    <div>
                        <h1>User Info</h1>
                        <h3>{context.user.name}</h3>
                        <h4>{context.user.email}</h4>
                        <Button onClick={context.logout}>Logout</Button>
                    </div>
                )}
            </UserContext.Consumer>
        )
    }
}
