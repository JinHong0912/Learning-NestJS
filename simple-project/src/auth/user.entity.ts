import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { OneToMany } from 'typeorm/browser';
import { BoardEntity } from '../board/board.entity';

@Entity('user')
@Unique(['username'])
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany((type) => Board, (board) => board.user, { eager: true })
  boards: Board[];
}
