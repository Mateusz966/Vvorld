import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/users.dto';


@Controller('auth')
export class AuthController {

  @Post('signup')
  async registeUser(@Body() createUser: CreateUserDto) {
    console.log(createUser);
  }

}
