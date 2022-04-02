export interface Board00Model {
  id: string;
  title: string;
  description: string;
  status: Board00Status; // BoardStatus 의 경우 공개글 , 비공개글로 나누어 지고 이 두가지 상태 이외에는 다른 것이 안됨.
}

export enum Board00Status { //이 두 상태만 나올 수 있게 하기 위해사 타입스크립트의 기능은 eunmeration을 이용
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
