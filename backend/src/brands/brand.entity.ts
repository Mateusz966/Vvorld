import { Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, ManyToMany, JoinTable } from 'typeorm';
import { Base } from "../config/base.entity";
import { Product } from 'src/products/product.entity';


@Entity()
export class Brand {
  
  @PrimaryColumn({unique: true })
  id: string;

  @Column({unique: true})
  name: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  lastChangedDateTime: Date;


  // TODO products in shop relation
  // TODO Shops city relation
}