import { Injectable, OnModuleInit, HttpService } from '@nestjs/common';

@Injectable()
export class BrandsService implements OnModuleInit {
  constructor(
    private httpService: HttpService
  ) { }

  onModuleInit() {
    this.insertBrands();
  }
  
  insertBrands() {
    const openFoodActData = 'https://pl-en.openfoodfacts.org/stores.json/'
    try {
      this.httpService.get(openFoodActData).subscribe((response) => {
        
      });
    } catch (error) {
      
    }
  }

}
