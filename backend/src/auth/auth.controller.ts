import { Controller, Post, Body, HttpException} from '@nestjs/common';
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
      await this.authService.isRegisterUserValid(email);
      password = await this.authService.hashPassword(password);
      await this.usersService.saveUser(createUser);
    } catch (error) {
      throw new HttpException(error.message, error.httpStatus);
    }

  }

  @Post('login')
  async login(@Body() loginUser: LoginUserDto) {
    try {
      const user = await this.authService.validUser(loginUser);
    } catch (error) {
      console.error(error);
    }
  }

}

