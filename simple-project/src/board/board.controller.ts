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

  // @Get(':id')
  // getBoardById(@Param('id') id: string): Board {
  //   console.log(id);
  //   return this.boardService.getBoardById(id);
  // }
  // @Post()
  // creatBoard(@Body() boardDto: BoardDto): //@Body('title') title: string,
  // //@Body('description') description: string,
  // Board {
  //   //console.log(title, description);
  //   console.log(boardDto.title);
  //   console.log(boardDto.description);
  //
  //   //return null;
  //   return this.boardService.creatBoard(boardDto);
  // }
  //
  // //특정부분 삭제
  // @Delete(':id')
  // deleteBoardById(@Param('id') id: string): Board {
  //   return this.boardService.getBoardById(id);
  // }
}
