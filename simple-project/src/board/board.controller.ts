import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './board.model';
import { BoardDto } from './board.dto';

@Controller('/board')
export class BoardController {
  constructor(private boardService: BoardService) {
    this.boardService = boardService;
  }

  @Get('')
  getBoards(): Board[] {
    return this.boardService.getAllBoards();
  }
}
