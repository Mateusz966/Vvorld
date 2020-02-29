import { HttpStatus } from "@nestjs/common";


type Errros = {
  [name: string]: string;
};


export const ErrorBuilder = (property: string, errors: Errros, httpStatus: HttpStatus): any => {
  return {
      message: [
        {
          target: {
            property,
            constraints: {
              errors,
            }
          }
        }
      ],
      httpStatus,
    }
};