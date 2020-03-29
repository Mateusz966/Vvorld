import { Module, HttpModule } from '@nestjs/common';
import { BrandsService } from './brands.service';

@Module({
  providers: [BrandsService],
  imports: [HttpModule],
})
export class BrandsModule {}
