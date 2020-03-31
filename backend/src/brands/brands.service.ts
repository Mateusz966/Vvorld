import { Injectable, OnModuleInit, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from './brand.entity';
import { Repository } from 'typeorm'; 

@Injectable()
export class BrandService implements OnModuleInit {
  constructor(
    private httpService: HttpService,
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) { }

  onModuleInit() {
    this.insertBrands();
  }
  
  async insertBrands() {
    const openFoodActData = 'https://pl-en.openfoodfacts.org/stores.json'
    try {
      this.httpService.get(openFoodActData).subscribe(async (response) => {
        const brand = response.data.tags.map((brand: any) => {
          return {
            name: brand.name,
            id: brand.id
          }
        });
      await this.brandRepository.save(brand) 
      });
    } catch (error) {
      
    }
  }

}
