import { Module, HttpModule } from '@nestjs/common';
import { BrandService } from './brands.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from './brand.entity';

@Module({
  providers: [BrandService],
  imports: [HttpModule, TypeOrmModule.forFeature([Brand])],
})
export class BrandModule {}
