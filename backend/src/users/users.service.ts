import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async createUser(user: CreateUserDto) {
   try {
    this.usersRepository.insert(user);
   } catch (error) {
     
   }
  }

  async ifUserExist(email: string): Promise<boolean> {
    try {
      const userWithEmail = await this.usersRepository.findOne({
        where: {
          email,
        }
      });
      if (userWithEmail) {
        return true
      }
      return false;
    } catch (error) {
      return true
    }
  }

}
