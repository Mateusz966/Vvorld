import '@testing-library/jest-dom/';
import { passwordAndPasswordConfimationMatch } from './ValidationMethods';


describe('Validation methods tests', () => {
  it('passwordAndPasswordConfimationMatch method compare two string and return empty object if given strings are equals', () => {
    const password = '123qwe';
    const passwordConfirmation = "123qwe";

    const errors = passwordAndPasswordConfimationMatch(password, passwordConfirmation);

    expect(errors).toBeNull()
  });

  it('passwordAndPasswordConfimationMatch method compare two string and return error message', () => {
    const password = '123qwe';
    const passwordConfirmation = "123qweqqaaa";
    const errorMessage = {
      passwordConfirmation: {
        constraints: {
          EqualsOther: "passwords and passwordConfirmation not match"
        }
      }
    }

    const errors = passwordAndPasswordConfimationMatch(password, passwordConfirmation);

    expect(errors).toMatchObject(errorMessage);
  })
});