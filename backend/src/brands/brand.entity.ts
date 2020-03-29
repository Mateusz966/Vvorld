import { Column, Entity } from 'typeorm';
import { Base } from "../config/base.entity";


@Entity()
export class Brands extends Base {

  @Column({unique: true})
  name: string;

  @Column({unique: true})
  address: string;

  @Column()
  lat: string;

  @Column()
  lng: string;

  // TODO products in shop relation
  // TODO Shops city relation
}