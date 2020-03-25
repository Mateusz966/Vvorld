import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './config/store/store';
import Layouts from './config/layouts/Layouts';
import { ThemeProvider } from '@material-ui/core';
import theme from './config/styles/theme';



const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <Layouts />
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default App;
