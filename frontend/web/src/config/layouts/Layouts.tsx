import React from 'react';
import { Switch, Route } from "react-router-dom";
import LAuth from '../../layouts/LAuth';
import LApp from '../../layouts/LApp';



const Layouts = () => {
  return (
    <Switch>
      <Route path="/auth" component={LAuth} />
      <Route path="/" exact component={LApp} />
    </Switch>
  );
};

export default Layouts;
