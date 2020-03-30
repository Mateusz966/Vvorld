import { Column, Entity, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Base } from "../config/base.entity";


@Entity()
export class Brands {
  
  @Column({unique: true })
  id: string;

  @Column({unique: true})
  name: string;

  @Column({unique: true})
  address: string;

  @Column()
  lat: string;

  @Column()
  lng: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  lastChangedDateTime: Date;

  // TODO products in shop relation
  // TODO Shops city relation
}