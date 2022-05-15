import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { BoardEntity } from '../board/board.entity';
import { UserEntity } from '../auth/user.entity';
export const typeormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 13306,
  username: 'nest',
  password: '1234',
  database: 'nestdb',
  //entities: [__dirname + '/../**/*.entity.{js,ts}'],
  entities: [BoardEntity, UserEntity],
  synchronize: true,
  autoLoadEntities: true,
  logging: true,
  keepConnectionAlive: true,
};
