import React, { PureComponent } from 'react';
import RegisterForm from './components/RegisterForm';
import MainHeader from '../../shared/components/MainHeader/MainHeader';


interface Props {

}

class Register extends PureComponent<Props> {
  render() {
    return (
      <React.Fragment>
        <MainHeader text={"Rejestracja"} />
        <RegisterForm />
      </React.Fragment>

    );
  }
}

export default Register;