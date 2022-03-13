import { Controller, Get } from '@nestjs/common';

@Controller('now')
export class NowController {
  // GET
  /* http://localhost:3000/now/day */
  @Get('day')
  getNow(): string {
    const now = new Date();
    return now.toISOString();
  }
}
