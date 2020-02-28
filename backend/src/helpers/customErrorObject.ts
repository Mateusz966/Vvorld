import { HttpStatus, HttpException } from "@nestjs/common";

type Errros = {
  [name: string]: string;
};

export const ErrorBuilder = (property: string, errors: Errros): void => {
  throw new HttpException
    (
      {
        message: [
          {
            target: {
              property,
              constraints: {
                errors,
              }
            }
          }
        ]

      },
      HttpStatus.UNPROCESSABLE_ENTITY
    );
};