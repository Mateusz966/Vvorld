import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from 'src/users/dto/users.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(loginUser: LoginUserDto): Promise<any> {
    const user = await this.authService.validUser(loginUser);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}