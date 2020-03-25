import { Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import Register from '../modules/Register/Register';
import Login from '../modules/Login/Login';

const LAuth: React.FC<{}> = () => {
  return (
    <Suspense fallback={null}>
      <Route path="/auth/sign-up" component={Register} />
      <Route path="/auth/sign-in" component={Login} />
    </Suspense>
  );
};

export default LAuth;
