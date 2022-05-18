import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ children, loggedIn }) => {

    if (loggedIn){
      return children;
      console.log(loggedIn)
    }

    return <Redirect to="./signin" />
  }

export default ProtectedRoute;

/*const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        props.loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    </Route>
  );
};

export default ProtectedRoute;*/

