import { MigrationInterface, QueryRunner, getRepository, createConnection } from "typeorm";
import { City } from "src/cities/city.entity";
import { citiesSeed } from "../seeders/cities.seed";


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
}
);

export class Cities1585399382427 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const cityRepository = getRepository(City);
    await cityRepository.save(citiesSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
  }

}
