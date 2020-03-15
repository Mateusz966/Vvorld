import React, { Component } from 'react';
import { TextField, Button, Grid, CircularProgress } from '@material-ui/core';
import AuthApi from '../../../api/Auth';
import styled from 'styled-components';
import RegisterSuccessed from './RegisterSuccessed';


const StyledTextField = styled(TextField)`
  margin-bottom: 15px;
  width: 100%;
`;

interface Props {

}
interface State {
  formData: {
    email: string,
    password: string,
    passwordConfirmation: string,
    mobilePhone: string,
  };
  errors: {
    email: string,
    password: string,
    passwordConfirmation: string,
    mobilePhone: string,
  };
  inProgress: boolean,
  formSended: boolean,
}

export default class RegisterForm extends Component<Props, State> {
  #authApi: AuthApi;

  constructor (props: Props) {
    super(props);
    this.state = {
      formData: {
        email: '',
        password: '',
        passwordConfirmation: '',
        mobilePhone: '',
      },
      errors: {
        email: '',
        password: '',
        passwordConfirmation: '',
        mobilePhone: '',
      },
      inProgress: false,
      formSended: false,
    };
    this.#authApi = new AuthApi();
  }

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { formData } = this.state;
    this.setState({
      inProgress: true,
    });
    try {
      await this.#authApi.signUp(formData);
      this.setState({
        formSended: true,
      });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({
        inProgress: false,
      });
    }
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    this.setState(({ formData }) => ({
      formData: {
        ...formData,
        [name]: value,
      }
    }));
  };

  render() {

    const { email, password, passwordConfirmation, mobilePhone } = this.state.formData;
    const { inProgress, formSended } = this.state;

    return (
      <Grid container spacing={3} component="form" onSubmit={this.handleSubmit}>
        <Grid item xs={8}>
          {
            formSended 
              ?
              <RegisterSuccessed />
              :
              <React.Fragment>
                <StyledTextField required value={email} label="email" type="email" name="email" onChange={this.handleChange} variant="outlined" />
                <StyledTextField required value={password} label="password" type="password" name="password" onChange={this.handleChange} variant="outlined" />
                <StyledTextField required value={passwordConfirmation} label="password confirmation" type="password" name="passwordConfirmation" onChange={this.handleChange} variant="outlined" />
                <StyledTextField value={mobilePhone} label="mobile phone" type="text" name="mobilePhone" onChange={this.handleChange} variant="outlined" />
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
  }
}
