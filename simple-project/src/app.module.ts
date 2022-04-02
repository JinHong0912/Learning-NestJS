import { Module } from '@nestjs/common';
import { BoardController } from './board/board.controller';
import { BoardService } from './board/board.service';
import { BoardsModule } from './board/board.module';
import { Board00Controller } from './board00/board00.controller';
import { Board00Service } from './board00/board00.service';

@Module({
  //imports: [BoardsModule],
  //imports: [Board00Module],
  //controllers: [BoardController],
  controllers: [Board00Controller],
  //providers: [BoardService],
  providers: [Board00Service],
})
export class AppModule {}
