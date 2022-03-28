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
  //게시글 등록
  @Post('')
  createBoard(
    //@Body('title') title: string,
    //@Body('description') description: string,
    @Body() boardDto: BoardDto,
  ): Board {
    console.log(BoardDto);
    return this.boardService.createBoard(boardDto);
  }

  @Get(':id')
  getBoardById(@Param('id') id: string) {
    return this.boardService.getBoardById(id);
  }

  @Delete(':id')
  deleteBoard(@Param('id') id: string): void {
    this.boardService.deleteBoard(id);
  }
}
