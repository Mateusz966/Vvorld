import React, { PureComponent } from 'react';
import RegisterForm from './components/RegisterForm';


interface Props {
  
}

class Register extends PureComponent<Props> {
  render() {
    return (
      <RegisterForm />
    )
  }
}

export default Register;