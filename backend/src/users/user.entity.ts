import { Column, Entity } from 'typeorm';
import { Base } from "../config/base.entity";


@Entity()
export class User extends Base {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  mobilePhone: string;

  @Column()
  email: string;

  @Column()
  password: string;
}