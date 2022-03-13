import { Controller, Get } from '@nestjs/common';
import { PracticeService } from './practice.service';
import { Practice } from './practice.model';

@Controller('practice')
export class PracticeController {
  constructor(private practiceService: PracticeService) {
    this.practiceService = practiceService;
  }
  @Get('')
  getAllpractice(): Practice[] {
    return this.practiceService.getPractice();
  }
}
