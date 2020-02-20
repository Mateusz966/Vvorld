import React from 'react';
import { Route, Redirect } from 'react-router-dom';
interface IProtectedRoute {
  Component: any,
  token: string,
}

const ProtectedRoute = ({
  Component,
  token,
  ...rest
}: IProtectedRoute) => (
  <Route
    {...rest}
    render={(props) => (token ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
        }}
      />
    ))}
  />
);
export default ProtectedRoute;
