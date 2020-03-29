import React from 'react';
import { Container, Grid } from '@material-ui/core';
import RegisterText from './components/RegisterText';
import RegisterForm from './components/RegisterForm';
import styled from 'styled-components';


const BackgroundImage = styled('div')`
  background-image: url('https://images.wallpaperscraft.com/image/vegan_the_inscription_lifestyle_139766_1920x1080.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;


const Register = () => {
  return (
    <Container>
      <Grid spacing={3} container>
        <Grid item xs={6}>
          <RegisterText />
          <RegisterForm />
        </Grid>
        <Grid item xs={6}>
          <BackgroundImage />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
