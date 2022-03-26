import { Injectable } from '@nestjs/common';
import { Board } from './board.model';
//import { v1 as uuid } from 'uuid';
import { BoardDto } from './board.dto';

@Injectable()
export class BoardService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  // getBoardById(id: string): Board {
  //   return this.boards.find((board) => board.id === id);
  // }
}
