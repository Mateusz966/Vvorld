import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './config/store/store';
import Layouts from './config/layouts/Layouts';



const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layouts />
      </Router>
    </Provider>
  );
}

export default App;
