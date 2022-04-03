import { Module } from '@nestjs/common';
import { BoardController } from './board/board.controller';
import { BoardService } from './board/board.service';
import { BoardsModule } from './board/board.module';
import { Board00Controller } from './board00/board00.controller';
import { Board00Service } from './board00/board00.service';

@Module({
  //Board
  //imports: [BoardsModule],
  //controllers: [BoardController],
  //providers: [BoardService],

  //Board00
  imports: [],
  controllers: [Board00Controller],
  providers: [Board00Service],
})
export class AppModule {}
