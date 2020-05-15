import React, { useContext } from 'react';
import { __RouterContext } from 'react-router';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';


import User from './Pages/User';
import HooksList from './Pages/HooksList';
import ReactSpring from './Pages/ReactSpring';

import { Button } from './components/Elements';
import { Toggle, Portal } from './components/Utilities';

function useRouter() {
  return useContext(__RouterContext);
};

const Routes = () => {
  return (
    <Router>
      <Toggle>
        {({ isToggled, toggle }) => (
          <>
            {isToggled && (
              <Link to="/">
                <Button>Back Home</Button>
              </Link>
            )}
            <Button onClick={toggle}>Open/Close Portal</Button>
            <Portal>
              {isToggled && (
                <h1 style={{ position: "absolute", top: "4rem" }}>
                  Hi, I am in A Portal
                </h1>
              )}
            </Portal>
          </>
        )}
      </Toggle>
      <Toggle>
        {({ isToggled, toggle }) => (
          <>
            <Button onClick={toggle}>Routes</Button>
            {isToggled && (
              <div>
                <Link to="/">
                  <Button>Home</Button>
                </Link>
                <Link to="/ReactSpring">
                  <Button>React Spring</Button>
                </Link>
                <Link to="/HooksList">
                  <Button>Hooks List</Button>
                </Link>
                <Link to="/user">
                  <Button>User Account</Button>
                </Link>
              </div>
            )}
          </>
        )}
      </Toggle>

      <Main />
    </Router>
  );
}

const Main = () => {
  const { location } = useRouter();
  console.log('Location: ', location);

  const transitions = useTransition(location, (location) => location.key, {
    from: {
      position: "absolute",
      right: 0,
      left: 0,
      opacity: 0,
      transform: "translate3d(100%, 0, 0)",
    },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-50%, 0, 0)" },
  });
  
  return transitions.map(({ item, key, props: transition }) => (
    <animated.div key={key} style={transition}>
      <Switch location={item}>
        <Route exact path="/" />
        <Route exact path="/user" component={User} />
        <Route exact path="/HooksList" component={HooksList} />
        <Route exact path="/ReactSpring" component={ReactSpring} />
      </Switch>
    </animated.div>
  ));
};

export default Routes;

