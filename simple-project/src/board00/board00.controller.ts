import { Controller, Get } from '@nestjs/common';
import { Board00Service } from './board00.service';

@Controller('board00') // 라우팅 path
export class Board00Controller {
  constructor(private board00Service: Board00Service) {} // 의존성 추가

  // @Get('')
  // getAllBoards00() {
  //   // 알아 보기 쉬운 이름() : 리턴타입 {}
  //   //return 'show get Board00s Test';
  //   return this.board00Service.getAllBoard00;
  // }
}
