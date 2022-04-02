export class BoardUpdateDto {
  title: string;
  description: string;
}
export enum BoardStatusUpdate {
  PUBLIC = 'PUBLIC', // 공개글
  PRIVATE = 'PRIVATE', // 비공개글
}
