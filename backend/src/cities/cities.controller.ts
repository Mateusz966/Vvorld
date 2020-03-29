import { Controller, Get, HttpException } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {

  constructor(
    private readonly citiesService: CitiesService
  ) { }
  
  @Get()
  async getCities() {
    try {
      const cities = await this.citiesService.allCities();
      return cities;
    } catch (error) {
      throw new HttpException(error.message, error.statusCode)
    }
  }

}
