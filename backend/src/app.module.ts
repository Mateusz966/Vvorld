import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Connection } from 'typeorm';
import { CitiesModule } from './cities/cities.module';
import { ProductsModule } from './products/products.module';
import { BrandModule } from './brands/brands.module';
@Module({
  imports: [TypeOrmModule.forRoot({
      type: "postgres",
      host: "172.17.0.2",
      port: 5432,
      username: "postgres",
      password: "123qwe",
      database: "vww",
      autoLoadEntities: true,
      synchronize: true,
      migrations: ["dist/database/migration/*.js"],
      dropSchema: true,
      keepConnectionAlive: true,
      cli: {
          "migrationsDir": "migration"
      }
  }), AuthModule, UsersModule, CitiesModule, ProductsModule, BrandModule,],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor(private readonly connection: Connection) {}
}
