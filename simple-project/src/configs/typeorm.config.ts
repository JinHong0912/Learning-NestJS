import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
export const typeormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 13306,
  username: 'nest',
  password: '1234',
  database: 'nestdb',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  autoLoadEntities: true,
  logging: true,
  keepConnectionAlive: true,
};
