import React, { useState, BaseSyntheticEvent } from 'react';
import { Grid, TextField, Button, CircularProgress } from '@material-ui/core';
import RegisterSuccessed from './RegisterSuccessed';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Auth from '../../../api/Auth';
import { formatErrorsBeforeRender } from '../../../helpers/formatErrorsBeforeRender/fomatErrorsBeforeRender';
import { RegisterUserData } from '../../../helpers/types';

const authApi = new Auth();

const StyledTextField = styled(TextField)`
  margin-bottom: 15px;
`;

const RegisterForm = () => {

  const { register, handleSubmit, errors, watch, setError, reset, formState } = useForm({
    mode: 'onBlur'
  });
  const [formSended, setFormSended] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  
  const onSubmit = async (data: RegisterUserData, event: BaseSyntheticEvent) => {
    event.preventDefault();
    reset();

    setInProgress(true);
    try {
      await authApi.signUp(data);
      setFormSended(true);
    } catch (error) {
      if(!error.response) {
        throw error;
      }
      const { message } = error?.response?.data;
      const errorsMessages = formatErrorsBeforeRender(message);
      setError(errorsMessages);

    } finally {
      setInProgress(false);
    }
  }


  const { email, password, passwordConfirmation, mobilePhone } = errors;

  return (
    //@ts-ignore
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid item xs={8}>
        {
          formSended
            ?
            <RegisterSuccessed />
            :
            <React.Fragment>
              <StyledTextField inputRef={register({required: 'Email field is required'})} helperText={email?.message} error={email?.message.length > 0} label="Email" type="text" name="email" variant="outlined" />
                <StyledTextField inputRef={register({required: 'Password field is required'})}  helperText={password?.message} error={password?.message.length > 0}label="Password" type="password" name="password" variant="outlined" />
                <StyledTextField inputRef={register({required: 'Password confirmation field is required', validate: value => value === watch('password') || 'password and password confirmation not match'})} helperText={passwordConfirmation?.message} error={passwordConfirmation?.message.length > 0}  label="Password confirmation" type="password" name="passwordConfirmation" variant="outlined" />
                <StyledTextField inputRef={register} helperText={mobilePhone?.message} error={mobilePhone?.message.length > 0}  label="Mobile phone" type="text" name="mobilePhone" variant="outlined" />
                <Grid item xs={12}>
                  <Button disabled={inProgress || !formState.isValid} type="submit">
                  {inProgress && <CircularProgress />}
                    Zarejestuj się
                  </Button>
                </Grid>
            </React.Fragment>
        }

      </Grid>
    </form>
  );
};

export default RegisterForm;
