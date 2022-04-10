import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Board00Service } from './board00.service';
import { Board00Model, Board00Status } from './board00.model';
import { CreateBoard00Dto } from './dto/create-board.dto';
import { Board00StatusValidationPipe } from './board00-status.valiation.pipe';

@Controller('board00') // 라우팅 path
export class Board00Controller {
  constructor(private board00Service: Board00Service) {} // 의존성 추가

  //return this.board00Service.getAllBoard00;
  @Get('') // 모든 게시글을 가지고 오는 핸들러
  getAllBoards00(): Board00Model[] {
    //매소드
    //알아 보기 쉬운 이름() : 리턴 타입 {}
    //return 'show get Board00';// 성공
    return this.board00Service.getAllBoard00();
  }

  //게시물 생성 create
  //Service에서 로직을 처리 했다면 Controller에서 Request와 Response 부분 처리
  @Post('') //Post 요청을 준다.
  @UsePipes(ValidationPipe)
  creatBoards00(@Body() createBoard00Dto: CreateBoard00Dto): Board00Model {
    console.log(createBoard00Dto);
    return this.board00Service.createBoard00(createBoard00Dto);
  }
  //게시물 하나만 가지고 오기
  @Get(':id')
  getBoards00ById(@Param('id') id: string): Board00Model {
    // id 값을 받아서 @Param 안에 있는 'id' 값의 파라미터를 id에 넣어 주고 string 타입으로 사용
    return this.board00Service.getBoard00ById(id);
  }
  //게시글 삭제
  @Delete(':id')
  deleteBoards00(@Param('id') id: string): void {
    this.board00Service.deleteBoard00(id);
  }

  //게시글 업데이트
  @Patch(':id')
  updateBoards00Status(
    @Param('id') id: string,
    @Body('status', Board00StatusValidationPipe) status: Board00Status,
  ): Board00Model {
    console.log(status);
    return this.board00Service.updateBoard00Status(id, status);
  }
}
