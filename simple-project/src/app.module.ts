import { Module } from '@nestjs/common';
import { BoardController } from "./board/board.controller";
import { BoardService } from "./board/board.service";
import { todoModule } from './todo/todo.module';
import { TodoController } from "./todo/todo.controller";
import { TodoService } from "./todo/todo.service";
import { todo2Controller } from "./todo2/todo2.controller";
import { todo2Module } from "./todo2/todo2.module";


@Module({
  imports: [todo2Module],
  controllers: [todo2Controller],
  providers: [],
})
export class AppModule {}
