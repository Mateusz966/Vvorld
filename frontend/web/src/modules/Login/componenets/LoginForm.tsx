import React, { useState, BaseSyntheticEvent } from 'react';
import { useForm } from 'react-hook-form';
import { Grid, TextField, Button, makeStyles, Theme, createStyles } from '@material-ui/core';
import { RootState } from '../../../config/store/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { formatErrorsBeforeRender } from '../../../helpers/formatErrorsBeforeRender/fomatErrorsBeforeRender';
import { LoginUserData } from '../../../helpers/types';
import { loginUser } from '../login.slice';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 'auto',
      '& .MuiTextField-root': {
        '&:last-of-type': {
          marginBottom: '15px',
        }
      },
    },
  }),
);

const LoginForm = () => {


  const classes = useStyles();
  const { register, handleSubmit, errors, reset, setError } = useForm();
  const token = useSelector((state: RootState) => state.auth.token);
  const [formSended, setFormSended] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async (data: LoginUserData, event: BaseSyntheticEvent) => {
    event.preventDefault();
    // reset();
    console.log(data);
    setInProgress(true);
    await dispatch(loginUser(data));

  };

  if (token) {
    return <Redirect to={'/'} />;
  }


  const { email, password } = errors;

  return (
    //@ts-ignore
    <Grid onSubmit={handleSubmit(onSubmit)} className={classes.root} item xs={4} component={'form'}>
      <TextField inputRef={register({ required: 'Email field is required' })} helperText={email?.message} error={email?.message.length > 0} label="Email" type="text" name="email" variant="outlined" />
      <TextField inputRef={register({ required: 'Password field is required' })} helperText={password?.message} error={password?.message.length > 0} label="Password" type="password" name="password" variant="outlined" />
      <Grid item xs={12}>
        <Button type="submit">
          Sign In
       </Button>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
