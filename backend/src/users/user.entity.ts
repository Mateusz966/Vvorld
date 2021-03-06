import { Column, Entity } from 'typeorm';
import { Base } from "../config/base.entity";


@Entity()
export class User extends Base {

  @Column({nullable: true, unique: true})
  mobilePhone: string | null;

  @Column({unique: true})
  email: string;

  @Column()
  password: string;
  
}