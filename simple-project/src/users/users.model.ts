export interface user {
  name: string;
  age: number;
  number: string;
  status: UsersStatus;
}

export enum UsersStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}