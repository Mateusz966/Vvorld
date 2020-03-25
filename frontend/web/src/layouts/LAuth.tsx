import { Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Register from '../modules/Register/Register';

const LAuth = () => {
  return (
    <Suspense fallback={null}>
      <Route path="/auth/sign-in" component={Register}></Route>
    </Suspense>
  );
};

export default LAuth;
