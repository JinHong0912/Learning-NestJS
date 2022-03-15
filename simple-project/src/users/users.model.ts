export interface User {
  id: string; // 식별자
  name: string;
  age: number;
  number: string;
  status: UsersStatus;
}

export enum UsersStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
