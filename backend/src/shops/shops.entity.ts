import { Column, Entity } from 'typeorm';
import { Base } from "../config/base.entity";


@Entity()
export class Shops extends Base {

  @Column({unique: true})
  name: string;

  @Column({unique: true})
  address: string;

  @Column()
  lat: string;

  @Column()
  lng: string;

  @Column()
  productsInShop: string;
  //TODO MANY TO MANY
  
}