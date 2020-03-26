import React from 'react';
import { useForm } from 'react-hook-form';
import { Grid, TextField, Button } from '@material-ui/core';
import { RootState } from '../../../config/store/rootReducer';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

interface Props {
  
}

const LoginForm = (props: Props) => {

  const { register, handleSubmit, errors, watch, setError } = useForm();
  const token = useSelector((state: RootState) => state.auth.token);

  if (token) {
    return <Redirect to={'/'} />
  }
  

  const { email, password } = errors;

  return (
    <Grid component={'form'}>
      <TextField  inputRef={register({required: 'Email field is required'})} helperText={email?.message} error={email?.message.length > 0} label="Email" type="text" name="email" variant="outlined" />
      <TextField inputRef={register({required: 'Password field is required'})}  helperText={password?.message} error={password?.message.length > 0}label="Password" type="password" name="password" variant="outlined" />
      <Button>
        Sign In
      </Button>
    </Grid>
  )
}

export default LoginForm
