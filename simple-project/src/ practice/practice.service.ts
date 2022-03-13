import { Injectable } from '@nestjs/common';
import { Practice } from './practice.model';

@Injectable()
export class PracticeService {
  private practices: Practice[] = [];

  getPractice(): Practice[] {
    return this.practices;
  }
}
