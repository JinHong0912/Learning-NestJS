import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardEntity } from './board.entity';
import { BoardDto } from './board.dto';
import { BoardStatus } from './board.status';
import { BoardStatusValiationPipe } from './board-status.valiation.pipe';
import { util } from 'prettier';
import skip = util.skip;
import { log } from 'util';

@Controller('/board')
export class BoardController {
  private logger = new Logger('BoardsController');
  constructor(private boardService: BoardService) {
    this.boardService = boardService;
  }
  // //find All
  @Get('')
  getBoards(
    @Query('skip') skip: number,
    @Query('take') take: number,
  ): Promise<BoardEntity[]> {
    return this.boardService.getAllBoards(skip, take);
  }

  // @Get('')
  // getBoards(): Board[] {
  //   return this.boardService.getAllBoards();
  // }
  //게시글 등록
  @Post('')
  @UsePipes(ValidationPipe)
  createBoard(
    //@Body('title') title: string,
    //@Body('description') description: string,
    @Body() boardDto: BoardDto,
  ): Promise<BoardEntity> {
    this.logger.log(`creating a new board
  Payload:${JSON.stringify(BoardDto)}`);
    console.log(boardDto);
    return this.boardService.createBoard(boardDto);
  }
  // find One
  // 배열안에 보드 안에 여러 가지 게시물을  특정 아이디를 통해서 특정 게시글 찾고 정보를 리턴 해준다.
  @Get(':id')
  getBoardById(@Param('id') id: number): Promise<BoardEntity> {
    return this.boardService.getBoardById(id);
  }
  //삭제
  @Delete(':id')
  deleteBoard(@Param('id') id: number): Promise<void> {
    //this.boardService.deleteBoard(id);
    return this.boardService.deleteBoard(id);
  }
  // // update
  @Patch(':id/status')
  updateBaordStatus(
    @Param('id') id: number,
    @Body('status', BoardStatusValiationPipe) status: BoardStatus,
  ) {
    return this.boardService.updateBoard(id, status);
  }

  // @Patch(':id/status')
  // updateBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValiationPipe) status: BoardStatus,
  // ) {
  //   return this.boardService.updateBoard(id, status);
  // }
}
