import { Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import Dashboard from '../modules/Dashboard/Dashboard';

const LApp = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <Route path="/" component={Dashboard} />
      </Suspense>
    </div>
  )
}

export default LApp
