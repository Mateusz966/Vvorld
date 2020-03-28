import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CitiesService {

  constructor(
    @InjectRepository(City)
    private readonly citiesRepository: Repository<City>
  ) { }
  
    async allCities(): Promise<any> {
      try {
        await this.citiesRepository.find();
      } catch (error) {
        throw error;
      }
    }

}
