import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsOptional, IsMobilePhone, } from 'class-validator';
import { IsPasswordsEqual } from '../helpers/isPasswordsEqual';

export class RegisterUserDto {
  
  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsString()
  @IsOptional()
  mobilePhone: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;


  @IsPasswordsEqual('password',{
    message: 'Passwords must match'
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