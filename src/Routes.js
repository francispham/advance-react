import React, { useContext } from 'react';
import { __RouterContext } from 'react-router';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';

import User from './components/User';
import CoolCards from './components/CoolCards';

import { Button } from './components/Elements';
import { Toggle, Portal } from './components/Utilities';

function useRouter() {
  return useContext(__RouterContext);
};

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
              <Button onClick={toggle}>Open/Close Portal</Button>
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
  console.log('Location: ', location);

  const transitions = useTransition(location, (location) => location.key, {
    from: {
      position: "absolute",
      opacity: 0,
      width: "100%",
      transform: "translate3d(100%, 0, 0)",
    },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-50%, 0, 0)" },
  });
  
  return transitions.map(({ item, key, props: transition }) => (
    <animated.div key={key} style={transition}>
      <Switch location={item}>
        <Route exact path="/" />
        <Route exact path="/coolCards" component={CoolCards} />
        <Route exact path="/user" component={User} />
      </Switch>
    </animated.div>
  ));
};

export default Routes;

