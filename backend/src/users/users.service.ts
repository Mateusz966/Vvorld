import { Injectable} from '@nestjs/common';
import { RegisterUserDto } from './users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {

  constructor (
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) { }

  async saveUser(user: RegisterUserDto) {
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
           email,
        }
      });
      return user ? user : undefined;
    } catch (error) {
      console.error(error);
    }
  }

  returnCurrentLoggedUser(userId: any) {
    throw new Error("Method not implemented.");
  }

}
