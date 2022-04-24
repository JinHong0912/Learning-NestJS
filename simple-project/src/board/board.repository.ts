import { EntityRepository, Repository } from 'typeorm';
import { BoardEntity } from './board.entity';
import { BoardDto } from './board.dto';
import { BoardStatus } from './board.status';

@EntityRepository(BoardEntity)
export class BoardRepository extends Repository<BoardEntity> {
  async createBoard(boardDto: BoardDto): Promise<BoardEntity> {
    const { title, description } = boardDto;

    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });
    return await this.save(board);
  }
}
