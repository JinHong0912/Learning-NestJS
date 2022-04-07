import { Controller, Get } from '@nestjs/common';

@Controller('board01')
export class Board01Controller {
  @Get()
  getBoard01All(): string {
    return 'show board01 Test';
  }
}
