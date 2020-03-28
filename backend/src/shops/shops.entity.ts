import { Column, Entity } from 'typeorm';
import { Base } from "../config/base.entity";


@Entity()
export class Shops extends Base {

  @Column({unique: true})
  name: string;

  @Column()
  products_in_shops: string;
  //TODO MANY TO MANY
  
}