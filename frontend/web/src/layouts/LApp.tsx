import { Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';
import Dashboard from '../modules/Dashboard/Dashboard';
import AppTopBar from '../shared/components/AppTopBar/AppTopBar';
import styled from 'styled-components';
import AddProduct from '../modules/Products/AddProduct';

const AppWrapper = styled('main')`
  margin-top: 45px;
`;

const LApp = () => {
  return (
    <Suspense fallback={null}>
      <AppTopBar />
      <AppWrapper>
        <Route path="/add-product" component={AddProduct} />
        <Route path="/" exact component={Dashboard} />
      </AppWrapper>
    </Suspense>
  );
};

export default LApp;
