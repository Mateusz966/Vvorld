//@ts-nocheck

export const formatErrorsBeforeRender = (errors: string[]): any => {
  const mapedError = errors.map((error) => {
    let fieldName = error.split(' ', 1)[0];
    const message = error.slice(1);

    return {
      name: fieldName,
      message,
    }
  });

  return mapedError;
}

export const convertToDictionary = ((mapedErrors: any) => {
  const errors = []
   mapedErrors.map((error) => {
    return errors[error.fieldName] = {
      message: error.message
    }
  });
  return errors;
})