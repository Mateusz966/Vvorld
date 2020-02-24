import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, Equals  } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName?: string;

  @IsString()
  @IsNotEmpty()
  lastName?: string;

  @IsPhoneNumber('PL, DE, UK')
  mobilePhone: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @Equals(this.password, this.passwordConfirmation)
  @IsNotEmpty()
  passwordConfirmation: string;
}

export class LoginUserDto {

}