import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { Board00Status } from './board00.model';

export class Board00StatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [Board00Status.PUBLIC, Board00Status.PRIVATE];

  transform(value: any, metadata: ArgumentMetadata): any {
    // value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException('${value} is invalid value');
    }
    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}
