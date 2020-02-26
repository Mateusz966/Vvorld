import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { hash, compare } from 'bcrypt';

@Injectable()
export class UsersService {

  constructor (
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) { }

  async createUser(user: CreateUserDto) {
    const { password } = user;
    try {
      user.password = await this.hashPassword(password);
      await this.usersRepository.insert(user);
    } catch (error) {
      console.error(error);
    }
  }

  async ifUserExist(email: string): Promise<boolean> {
    try {
      const userWithEmail = await this.usersRepository.findOne({
        where: {
          email,
        }
      });
      return userWithEmail ? true : false;
    } catch (error) {
      return true;
    }
  }

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    try {
      const hashedPassword = await hash(password, saltRounds);
      return hashedPassword;
    } catch (error) {
      console.error(error);
    }
  }

  async comparePassword(givenPassword: string, passwordInDb: string): Promise<boolean> {
    try {
      return true;
    } catch (error) {
      return false;
    }
  }

}
