import { Controller, Post, Body, HttpException, HttpStatus} from '@nestjs/common';
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
    const { email, password } = createUser;
    try {
      await this.authService.isRegisterUserValid(email);
      createUser.password = await this.authService.hashPassword(password);
      await this.usersService.saveUser(createUser);
    } catch (error) {
      throw new HttpException(error.message, error.httpStatus);
    }

  }

  @Post('login')
  async login(@Body() loginUser: LoginUserDto) {
    try {
      const token = await this.authService.validUser(loginUser);
      if (token) {
        return token;
      }
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    } catch (error) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }

}

