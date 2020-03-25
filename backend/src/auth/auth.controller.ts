import { Controller, Post, Body, HttpException, HttpStatus, Get, Req, UseGuards } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { RegisterUserDto } from '../users/users.dto'
import { JwtAuthGuard } from './jwt-auth.guard';



@Controller('auth')
export class AuthController {

  constructor (
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) { }

  @Post('sign-up')
  async registerUser(@Body() user: RegisterUserDto) {
    const { password } = user;
    try {
      const hashedPassword =  await this.authService.hashPassword(password);
      const userToSave = { ...user, password: hashedPassword };
      await this.usersService.saveUser(userToSave);
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
  @UseGuards(JwtAuthGuard)
  @Get('user')
  async getUserDetails(@Req() request: any) {
    const { userId } = request.user;
    return await this.usersService.returnCurrentLoggedUser(userId);
  }

}
