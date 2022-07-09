import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from './board.status';
import { ManyToOne } from 'typeorm/browser';

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

  @ManyToOne((type) => User, (user) => user.boards, { eager: false })
  user: User;
}
