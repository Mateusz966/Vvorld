import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { hash, compare } from 'bcrypt';
import { LoginUserDto } from 'src/users/dto/users.dto';

@Injectable()
export class AuthService {

  constructor (private readonly usersService: UsersService) { }

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
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  }


  async comparePassword(givenPassword: string, hash: string): Promise<boolean> {
    try {
      const isValid = await compare(givenPassword, hash);
      return isValid ? true : false;
    } catch (error) {
      return false;
    }
  }

  async isRegisterUserValid(email: string) {
    try {
      console.log(email);
      const user = await this.usersService.findUser(email);
      return user ? undefined : true;
    } catch (error) {
      console.log('halko');
    }
  }

  async login(user: LoginUserDto) {

  }


}
