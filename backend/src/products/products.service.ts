import { Injectable, OnModuleInit, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from 'src/brands/brand.entity';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService implements OnModuleInit {
  constructor (
    private httpService: HttpService,
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) { }


  onModuleInit() {
    this.insertOrUpdateProducts();
  }

  async insertOrUpdateProducts() {
    let pageNumber = 1;
    const getProductsEndpoints = `https://world.openfoodfacts.org/language/polish/${pageNumber}.json`
    try {
      const brands = await this.brandRepository.find();
      if (brands.length) {
        for (let index = 1; index < 2; index++) {
          this.httpService.get(getProductsEndpoints).subscribe((response) => {
            console.log(response.data.products[0]);
          })
          
        }
      }
    } catch (error) {
      
    }
  }

}
