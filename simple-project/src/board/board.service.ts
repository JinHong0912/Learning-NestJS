import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { BoardEntity } from './board.entity';
import { BoardDto } from './board.dto';
import { BoardStatus } from './board.status';

@Injectable()
export class BoardService {
  // private을 명시하여 암묵적으로 프로퍼티 할당
  constructor(
    //생성자 빠짐
    @InjectRepository(BoardRepository) private boardRepository: BoardRepository,
  ) {}

  // private boards: Board[] = []; MySQL 사용전 board[] 배열
  // getAllBoards(): Board[] {
  //   return this.boards;
  // }
  // // getBoardById(id: string): Board {
  // //   return this.boards.find((board) => board.id === id);
  // // }
  //
  //게시글 등록 생성
  async createBoard(boardDto: BoardDto): Promise<BoardEntity> {
    const { title, description } = boardDto;

    const board = this.boardRepository.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });
    return await this.boardRepository.save(board);
  }

  async getBoardById(id: number): Promise<BoardEntity> {
    const board = await this.boardRepository.findOne(id);

    //예외 처리
    if (!board) {
      throw new NotFoundException('존제하지 않는 게시물 입니다');
    }

    return board;
  }
  //
  // deleteBoard(id: string): void {
  //   const found = this.getBoardById(id);
  //   this.boards = this.boards.filter((board) => found.id !== id);
  // }
  // // 업데이트
  // updateBoard(id: string, status: BoardStatus): Board {
  //   // const boardUpdate = this.getBoardById(id); // 업데이트 하고자 하는 정보를 board에 넣어 준다;
  //   const boardUpdate = this.getBoardById(id);
  //   boardUpdate.status = BoardStatus.PRIVATE;
  //   return boardUpdate;
  // }
}
