import { Controller, Get } from '@nestjs/common';

@Controller('board00')
export class Board00Controller {
  @Get('')
  getBoard00s(): string {
    return 'show get Board00s Test';
  }
}
