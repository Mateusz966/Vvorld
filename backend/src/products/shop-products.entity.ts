import { Column, Entity } from 'typeorm';
import { Base } from "../config/base.entity";


@Entity()
export class Product extends Base {

  // TODO MANY-TO-MANY TABLE shop_id with product_d
  
}