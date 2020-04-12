import { Injectable, OnModuleInit, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService implements OnModuleInit {
  constructor (
    private httpService: HttpService,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) { }


  onModuleInit() {
    // For development mode only, need to insert a base products.
    const isProductsAdded = false;
    if (!isProductsAdded) {
      this.insertOrUpdateProducts();
    }
  }

  async insertOrUpdateProducts() {
    try {
      const products = await this.getAllProducts();
      products.forEach(async (product) => {
        if (product?.product_name && product?.ingredients_text_pl && product.ingredients_text_pl.length && product?.stores) {
          const productIngredients =  product.ingredients_text_pl.split(',');
          const inStores = product.stores.split(',');
          await this.productRepository.save({
            name: product.product_name,
            ingredients: productIngredients,
            inStores,
          });
        }

      });
    } catch (error) {
      console.log(error);
    }
  }

  async getAllProducts(page = 1) {
    try {
      const getProductsEndpoints = `https://world.openfoodfacts.org/language/polish/${page}.json`;
      const response = await this.httpService.get(getProductsEndpoints).toPromise();
      const { products } = response.data;

      if (page < 5) {
        console.log(page);
        return [...products, ...(await this.getAllProducts(page + 1))];
      }
      return products;
    } catch (error) {
      console.log(error);;
    }
  }
}
