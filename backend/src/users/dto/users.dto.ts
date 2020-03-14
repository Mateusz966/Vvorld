import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsOptional, IsMobilePhone, } from 'class-validator';
import { IsPasswordsEqual } from '../../helpers/isPasswordsEqual';

export class CreateUserDto {
  
  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsPhoneNumber('PL, DE, UK')
  @IsOptional()
  mobilePhone: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;


  @IsPasswordsEqual('password',{
    message: 'Text must be longer than the title'
  })
  @IsNotEmpty()
  passwordConfirmation: string;
}

export class LoginUserDto {

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

}