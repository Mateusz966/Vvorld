import { Column, Entity } from 'typeorm';
import { Base } from "../config/base.entity";



@Entity()
export class Product extends Base {

  @Column({ unique: true, nullable: true })
  name: string;

  @Column()
  ingredients: string;

  @Column('varchar', { array: true })
  inStores: string[];

}