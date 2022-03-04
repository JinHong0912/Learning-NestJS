import { Controller, Get } from '@nestjs/common';

@Controller('/todo2')
export class todo2Controller {
  @Get()
  getTodo2(): string {
    return '2022-03-03 todo2생성';
  }
}
