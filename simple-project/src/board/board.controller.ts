import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Patch,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { Board, BoardStatus } from './board.model';
import { BoardDto } from './board.dto';
import { BoardUpdateDto } from './board.updateDto';

@Controller('/board')
export class BoardController {
  constructor(private boardService: BoardService) {
    this.boardService = boardService;
  }
  //find All
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
  // find One
  // 배열안에 보드 안에 여러 가지 게시물을  특정 아이디를 통해서 특정 게시글 찾고 정보를 리턴 해준다.
  @Get(':id')
  getBoardById(@Param('id') id: string) {
    return this.boardService.getBoardById(id);
  }
  //삭제
  @Delete(':id')
  deleteBoard(@Param('id') id: string): void {
    this.boardService.deleteBoard(id);
  }
  // update

  @Patch(':id')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status') status: BoardStatus,
  ) {
    return this.boardService.updateBoardStatus(id, status);
  }
}
