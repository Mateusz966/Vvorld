import {MigrationInterface, QueryRunner, getRepository, createConnection} from "typeorm";
import { userSeed } from '../seeders/user.seed';
import {User} from '../../users/user.entity';

createConnection({
    type: "postgres",
    host: "172.17.0.2",
    port: 5432,
    username: "postgres",
    password: "123qwe",
    database: "postgres",
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
    migrations: ["dist/database/migration/*.js"],
    cli: {  
        "migrationsDir": "migration"
    }
  })


export class UserRegister1583430494436 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {;
         const userRepository = getRepository(User);
         await userRepository.save(userSeed);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
