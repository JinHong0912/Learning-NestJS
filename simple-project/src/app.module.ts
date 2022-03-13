import { Module } from '@nestjs/common';
import { BoardController } from './board/board.controller';
import { BoardService } from './board/board.service';
import { BoardsModule } from './board/board.module';

@Module({
  imports: [BoardsModule],
  controllers: [BoardController],
  providers: [BoardService],
})
export class AppModule {}
