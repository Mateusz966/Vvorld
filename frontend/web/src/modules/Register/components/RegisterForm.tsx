import React, { useState } from 'react';
import { Grid, TextField, Button, CircularProgress } from '@material-ui/core';
import RegisterSuccessed from './RegisterSuccessed';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';



const StyledTextField = styled(TextField)`
  margin-bottom: 15px;
`;

interface Props {

}

const RegisterForm = (props: Props) => {

  const { register, handleSubmit, errors } = useForm();
  const [formSended, setFormSended] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const onSubmit = (data: any) => console.log(data);

  return (
    <Grid container spacing={3} noValidate component="form"onSubmit={handleSubmit(onSubmit)}>
      <Grid item xs={8}>
        {
          formSended
            ?
            <RegisterSuccessed />
            :
            <React.Fragment>
              <StyledTextField inputRef={register} helperText={errors.email} error={errors.email} label="email" type="email" name="email" variant="outlined" />
                <StyledTextField inputRef={register}  required helperText={errors.password} error={errors.password} label="password" type="password" name="password" variant="outlined" />
                <StyledTextField inputRef={register} required helperText={errors.passwordConfirmation} error={errors.passwordConfirmation}  label="password confirmation" type="password" name="passwordConfirmation" variant="outlined" />
                <StyledTextField inputRef={register} helperText={errors.mobilePhone} error={errors.mobilePhone}  label="mobile phone" type="text" name="mobilePhone" variant="outlined" />
                <Grid item xs={12}>
                  <Button disabled={inProgress} type="submit">
                  {inProgress && <CircularProgress />}
                    Zarejestuj się
                  </Button>
                </Grid>
            </React.Fragment>
        }

      </Grid>
    </Grid>
  );
};

export default RegisterForm;
