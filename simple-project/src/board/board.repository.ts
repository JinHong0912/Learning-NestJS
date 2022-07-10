import { EntityRepository, Repository } from 'typeorm';
import { BoardEntity } from './board.entity';
import { BoardDto } from './board.dto';
import { BoardStatus } from './board.status';
import { UserEntity } from '../auth/user.entity';

@EntityRepository(BoardEntity)
export class BoardRepository extends Repository<BoardEntity> {
  async createBoard(
    boardDto: BoardDto,
    user: UserEntity,
  ): Promise<BoardEntity> {
    const { title, description } = boardDto;

    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
      user,
    });
    return await this.save(board);
  }
}
