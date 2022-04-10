import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { BoardStatus } from './board.status';

export class BoardStatusValiationPipe implements PipeTransform {
  readonly StatusOption = [BoardStatus.PUBLIC, BoardStatus.PRIVATE];

  transform(value: any, metadata: ArgumentMetadata): any {
    //console.log('value : ', value);
    //console.log('metadate : ', metadata);
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is invalid value`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StatusOption.indexOf(status);
    return index !== -1;
  }
}
