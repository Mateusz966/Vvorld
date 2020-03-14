export const passwordAndPasswordConfimationMatch = (password: string, passwordConfirmation: string): any => {
  if (password !== passwordConfirmation) {
    return {
      passwordConfirmation: {
        constraints: {
          EqualsOther: "passwords and passwordConfirmation not match"
        }
      }
    };
  } else {
    return null;
  }
};

export const isGivenFieldsFilled = (fields: Array<any>): boolean => {
  return !fields.some((field: any) => fields.length === 0)
};
