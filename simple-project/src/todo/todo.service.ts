import {Injectable} from "@nestjs/common";


@Injectable()
export class TodoService {
    private todos: todo[] = [];

    getTodo(): Todo[] {
        return this.todos;
    }
}