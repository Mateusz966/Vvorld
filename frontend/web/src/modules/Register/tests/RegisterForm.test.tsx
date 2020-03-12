import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/';
import RegisterForm from '../components/RegisterForm';
import axios from 'axios';


jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;



describe('Register from tests', () => {

  it('Renders correctly', () => {
    const { container } = render(<RegisterForm />);
    const form = container.querySelector('form');
    expect(form).toBeDefined();
  });

  it('Handle change method works correctly', () => {
    const { getByTestId } = render(<RegisterForm />);
    const input = getByTestId('email');
    const email = 'example@example.com';

    fireEvent.change(input, { target: { value: email } });

    expect(input).toHaveValue(email);
  });

  it('Fill form fields correctly', () => {
    const { container } = render(<RegisterForm />);
    const password = container.querySelector('input[name="password"]');
    const passwordConfirmation = container.querySelector('input[name="passwordConfirmation"]');
    const email = container.querySelector('input[name="email"]');
    const formData = {
      email: 'example@example.com',
      password: '123wqe',
      passwordConfirmation: '123qwe',
    };


    fireEvent.change(password, { target: { value: '123qwe' } });
    fireEvent.change(passwordConfirmation, { target: { value: '123qwe' } });
    fireEvent.change(email, { target: { value: 'example@example.com' } });

    expect({
      password: password.value,
      passwordConfirmation: passwordConfirmation.value,
      email: email.value,
    }).toBe(FormData)

  });

  it('When press button on submit handleSubmit method have been call and disable button', () => {
    const { container } = render(<RegisterForm />);
    const button = container.querySelector('button');

    fireEvent.click(button);

    expect(button).toBeDisabled();
  });
});