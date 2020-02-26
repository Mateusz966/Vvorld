import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/users.dto';
import { UsersService } from 'src/users/users.service';


@Controller('auth')
export class AuthController {

  constructor (private readonly usersService: UsersService) { }

  @Post('signup')
  async registerUser(@Body() createUser: CreateUserDto) {
    createUser.passwordConfirmation = undefined;
    if (await this.usersService.ifUserExist(createUser.email)) {
      throw new HttpException
        (
          {
            message: [
              {
                target: {
                  property: 'email',
                  constraints: {
                    exist: "Given email is aleady taken"
                  }
                }
              }
            ]

          },
          HttpStatus.UNPROCESSABLE_ENTITY
        );
    }
    await this.usersService.createUser(createUser);
  }


}

