import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Connection } from 'typeorm';
import { configService } from './config/ConfigService';
import { CitiesModule } from './cities/cities.module';
import { ProductsModule } from './products/products.module';
import { BrandsModule } from './brands/brands.module';
@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()), AuthModule, UsersModule, CitiesModule, ProductsModule, BrandsModule,],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor(private readonly connection: Connection) {}
}
