import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from './board.status';
import { ManyToOne } from 'typeorm/browser';
import { UserEntity } from '../auth/user.entity';

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

  @ManyToOne((type) => UserEntity, (user) => user.boards, { eager: false })
  user: UserEntity;
}
