import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core';

interface Props {
  
}
interface State {
  formData: {
    email: string,
    password: string,
    passwordConfirmation: string,
    mobilePhone: string,
  }
  errors: any,
  inProgress: boolean,
}

export default class RegisterForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      formData: {
        email: '',
        password: '',
        passwordConfirmation: '',
        mobilePhone: '',
      },
      errors: {

      },
      inProgress: false,
    }
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
   event.preventDefault();
   
    this.setState({
      inProgress: true
    })
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    this.setState(({ formData }) => ({
      formData: {
        ...formData,
        [name]: value,
      }
    }))
  }

  render() {

    const { email, password, passwordConfirmation, mobilePhone } = this.state.formData;
    const { inProgress } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <TextField value={email} label="email" name="email" inputProps={{ "data-testid": "email" }} onChange={this.handleChange} variant="outlined"  />
        <Button disabled={inProgress} type="submit">
          Zarejestuj się
        </Button>
      </form>
    )
  }
}
