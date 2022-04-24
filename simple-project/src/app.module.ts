import { Module } from '@nestjs/common';
import { BoardsModule } from './board/board.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './configs/typeorm.config';

@Module({
  //Board
  imports: [BoardsModule, TypeOrmModule.forRoot(typeormConfig)],
  controllers: [],
  providers: [],

  //Board00
  // imports: [],
  // controllers: [Board00Controller],
  // providers: [Board00Service],

  //Board01
  // imports: [],
  // controllers: [Board01Controller],
  // providers: [],
})
export class AppModule {}
