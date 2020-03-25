import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { RegisterUserDto, LoginUserDto } from '../users/users.dto'
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    try {
      const hashedPassword = await hash(password, saltRounds);
      return hashedPassword;
    } catch (error) {
      return error;
    }
  }

  async validateUser(user: LoginUserDto): Promise<any> {
    const { email } = user;
    try {
      const userInDb = await this.usersRepository.findOne({ email, });
      if (userInDb) {
        const isUserValid = await compare(user.password, userInDb.password);
        userInDb.password = undefined;
        return isUserValid ? userInDb : undefined;
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  async login(user: any) {
    const payload = {
      email: user.email,
      sub: user.id
    };
    return {
      token: this.jwtService.sign(payload)
    }
  }

}
