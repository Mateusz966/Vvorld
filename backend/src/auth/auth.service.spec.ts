import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from './constants';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../users/user.entity';


describe('AuthService', () => {
  let service: AuthService;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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
      providers: [
        AuthService,
        UsersService, {
          provide: getRepositoryToken(User),
          useValue: 'd'
        }
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // it('should returned hashed password', () => {
  //   expect(service.hashPassword('123qwe')).toBeTruthy();
  // })

});
