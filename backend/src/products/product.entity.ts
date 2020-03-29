import { Column, Entity } from 'typeorm';
import { Base } from "../config/base.entity";


@Entity()
export class Product extends Base {

  @Column({unique: true})
  productName: string;

  @Column()
  ingredients: string;
  
}