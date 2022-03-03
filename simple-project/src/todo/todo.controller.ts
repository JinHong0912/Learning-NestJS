import {Controller, Get} from "@nestjs/common";
import {TodoService} from "./todo.service";
import {Board} from "../board/board.model";

@Controller('/todo')
export class TodoController{
    constuctor(private todoService: TodoService){
        this.todoService = todoService;
    }
    @Get('')
    getTodo(): todo[] {
        return this.Todo;

    }
}