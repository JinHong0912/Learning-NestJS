import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board00Service } from './board00.service';
import { Board00Model } from './board00.model';
import { Board } from '../board/board.model';

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
  creatBoards00(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Board00Model {
    console.log(title, description);
    return this.board00Service.createBoard00(title, description);
  }
}
