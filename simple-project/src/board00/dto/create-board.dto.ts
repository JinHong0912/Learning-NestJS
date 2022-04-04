import { IsNotEmpty } from 'class-validator';

export class CreateBoard00Dto {
  //Pipe 적용 하기
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
}
