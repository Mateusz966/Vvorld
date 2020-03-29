import { Column, Entity } from 'typeorm';
import { Base } from "../config/base.entity";


@Entity()
export class City extends Base {

  @Column({unique: true})
  name: string;
  
}