import { Controller, Get } from '@nestjs/common';

@Controller('board00') // 라우팅 path
export class Board00Controller {
  @Get('')
  getBoard00s(): string {
    // 알아 보기 쉬운 이름() : 리턴타입 {}
    return 'show get Board00s Test';
  }
}
