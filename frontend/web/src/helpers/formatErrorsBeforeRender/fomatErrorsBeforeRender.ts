import { ErrorField } from "../types";

export const formatErrorsBeforeRender = (errors: string[]): ErrorField[] => {
  const mapedError = errors.map((error) => {
    const fieldName = error.split(' ', 1)[0];
    const message = error;

    return {
      name: fieldName,
      message,
      type: '',
    };
  });

  return mapedError;
};
