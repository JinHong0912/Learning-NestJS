export interface Board {
  // 게시글에 대한 타입을 정의
  id: string; // 식별자
  title: string; // 제목
  description: string; // 내용
  //description: string // 내용
  status: BoardStatus; // 게시글 상태
}

export enum BoardStatus {
  PUBLIC = 'PUBLIC', // 공개글
  PRIVATE = 'PRIVATE', // 비공개글
}
