export interface Practice {
  practiceName: string; //연습이름
  practiceDay: number; //연습번호
  status: PracticeStatus;
}

export enum PracticeStatus {
  PUBIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}