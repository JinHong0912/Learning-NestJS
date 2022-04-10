import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from './board.status';

@Entity('board')
export class BoardEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;

  @Column()
  status: BoardStatus;
}
