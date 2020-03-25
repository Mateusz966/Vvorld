import React from 'react'
import { Container, Grid } from '@material-ui/core';
import { TextField } from 'material-ui';

interface Props {
  
}

const Login = (props: Props) => {
  return (
    <>
      <Container>
        <Grid component={'form'} xs={12} item>
          <TextField name="email" type="text" />
          <TextField name="password" type="password" />
        </Grid>
      </Container>
    </>
  )
}

export default Login
