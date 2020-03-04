import { Injectable, HttpStatus } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { hash, compare } from 'bcrypt';
import { LoginUserDto } from 'src/users/dto/users.dto';
import { ErrorBuilder } from 'src/helpers/customErrorObject';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor (
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
    ) 
    
    { }

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    try {
      const hashedPassword = await hash(password, saltRounds);
      return hashedPassword;
    } catch (error) {
      console.error(error);
    }
  }

  async validUser(loginUser: LoginUserDto): Promise<any> {
    const { email, password } = loginUser;
    try {
      const user = await this.usersService.findUser(email);
      if (user) {
        await this.comparePassword(password, user.password);
        const token = await this.getAccess(user);
        return token;
      }
      return undefined;
    } catch (error) {
      console.log(error);
    }
  }

  async isRegisterUserValid(email: string): Promise<PromiseConstructor> {
    if (await this.usersService.findUser(email)) {
      return Promise.reject(
        ErrorBuilder('email', {
          exist: "Given email is taken",
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
        )
      )
    }
  }

  async getAccess(user: any) {
    const payload = { username: user.email, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }


  async comparePassword(givenPassword: string, hash: string): Promise<boolean> {
    try {
      const isValid = await compare(givenPassword, hash);
      return isValid ? true : false;
    } catch (error) {
      return false;
    }
  }
}
