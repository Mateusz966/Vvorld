import React from 'react';
import { Container, makeStyles, Theme, createStyles } from '@material-ui/core';
import LoginForm from './componenets/LoginForm';
import MainHeader from '../../shared/components/MainHeader/MainHeader';




const Login = () => {

  return (
    <Container maxWidth="sm">
      <MainHeader>
        Sign In to better Vorld
      </MainHeader>
      <LoginForm />
    </Container>
  );
};

export default Login;
