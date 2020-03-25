import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from '../users/users.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super(
      {
        usernameField: 'email',
        passwordField: 'password'
      }
    );
  }

  async validate(email: string, password: string): Promise<RegisterUserDto> {
    try {
      const userInDb = await this.authService.validateUser({
        email,
        password
      });
      if (userInDb) {
        return userInDb;
      }
      throw new HttpException('Bad email or password', 401)
    } catch (error) {
      throw error;
    }
  }
}