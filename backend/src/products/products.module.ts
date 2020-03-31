import { Module, HttpModule } from '@nestjs/common';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Brand } from 'src/brands/brand.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Brand]), HttpModule],
  providers: [ProductsService]
})
export class ProductsModule {}
