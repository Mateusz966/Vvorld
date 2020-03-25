import React from 'react';
import { Switch, Route } from "react-router-dom";
import LAuth from '../../layouts/LAuth';



const Layouts: React.FC<{}> = () => {
  return (
    <Switch>
      <Route path="/auth" component={LAuth} />
    </Switch>
  );
};

export default Layouts;
