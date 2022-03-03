import { Module } from '@nestjs/common';
import {BoardController} from "./board/board.controller";
import {BoardService} from "./board/board.service";
import {todoModule} from './todo/todo.module';
import {TodoController} from "./todo/todo.controller";
import {TodoService} from "./todo/todo.service";

@Module({
  imports: [todoModule],
  controllers: [TodoController],
  providers: [TodoService],
})
export class AppModule {}
