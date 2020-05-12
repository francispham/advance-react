import React, { useContext } from 'react';
import { __RouterContext } from "react-router";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import User from './components/User';
import CoolCards from './components/CoolCards';

import { Button } from './components/Elements';
import { Toggle, Portal } from './components/Utilities';

function useRouter() {
  return useContext(__RouterContext);
}
const Routes = () => {
  return (
    <Router>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/user">
        <Button>User Account</Button>
      </Link>
      <Link to="/coolCards">
        <Button>CoolCards</Button>
      </Link>

      <>
        <Toggle>
          {({ isToggled, toggle }) => (
            <>
              {isToggled && (
                <Link to="/">
                  <h1>Back Home</h1>
                </Link>
              )}
              <Button onClick={toggle}>Open Portal</Button>
              <Portal>{isToggled && <h1>Hi, I am in A Portal</h1>}</Portal>
            </>
          )}
        </Toggle>
      </>

      <Main />
    </Router>
  )
}

const Main = () => {
  const { location } = useRouter();
  console.log('Location: ', location)
  return (
    <div>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/coolCards" component={CoolCards} />
        <Route exact path="/user" component={User} />
      </Switch>
    </div>
  )
};

export default Routes;

