import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto/users.dto';
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

  async saveUser(user: CreateUserDto) {
    const { password } = user;
    try {
      await this.usersRepository.insert(user);
    } catch (error) {
      console.error(error);
    }
  }

  async findUser(email: string): Promise<any> {
    try {
      const user = await this.usersRepository.findOne({
        where: {
           email: email
        }
      });
      return user ? user : undefined;
    } catch (error) {
      console.error(error);
    }
  }

}
