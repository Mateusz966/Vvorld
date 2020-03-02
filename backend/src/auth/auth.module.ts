import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from './constants';


@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstant.secret,
      signOptions: {
        expiresIn: '2d'
      }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
