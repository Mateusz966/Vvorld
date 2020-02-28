import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from '../users/dto/users.dto';
import { UsersService } from 'src/users/users.service';
import { ErrorBuilder } from '../helpers/customErrorObject';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor (
    private readonly usersService: UsersService,
    private readonly authService: AuthService
  ) { }

  @Post('signup')
  async registerUser(@Body() createUser: CreateUserDto) {
    createUser.passwordConfirmation = undefined;
    let { email, password } = createUser;
    try {
      await this.usersService.findUser(email)
      password = await this.authService.hashPassword(password);
      await this.usersService.saveUser(createUser);
    } catch (error) {
      console.log('xd');
    }

  }

  @Post('login')
  async login(@Body() loginUser: LoginUserDto) {
    const { password } = loginUser;
    try {
      const isUserValid = await this.authService.validUser(loginUser);
      if (isUserValid) {

      }
      ErrorBuilder('password', { error: 'Wrong login or password' });

    } catch (error) {
      console.error(error);
    }
  }

}

