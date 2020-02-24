import { Controller, Post, Body } from '@nestjs/common';


@Controller('auth')
export class AuthController {

  @Post('signup')
  async signUp(@Body() signUpDto): Promise<string> {
    console.log(signUpDto);
    return 'xd';
  }

}
