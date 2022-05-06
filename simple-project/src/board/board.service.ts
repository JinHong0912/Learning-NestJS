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
    //생성자 빠짐 // Repository Injection(주입) Service에 Repository를 사용 하기 위해 추가
    // Inject Repository to Service
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
  //게시글 등록 생성 => BoardRepository로 이동 => Repository 코드 정리
  async createBoard(boardDto: BoardDto): Promise<BoardEntity> {
    // const { title, description } = boardDto;
    //
    // const board = this.boardRepository.create({
    //   title,
    //   description,
    //   status: BoardStatus.PUBLIC,
    // });
    // return await this.boardRepository.save(board);
    return this.boardRepository.createBoard(boardDto);
  }

  async getBoardById(id: number): Promise<BoardEntity> {
    const board = await this.boardRepository.findOne(id);

    //예외 처리
    if (!board) {
      //throw new NotFoundException('존제하지 않는 게시물 입니다');
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }

    return board;
  }
  //
  async deleteBoard(id: number): Promise<void> {
    //const found = this.getBoardById(id);
    //this.boards = this.boards.filter((board) => found.id !== id);

    //Delete 사용
    // const result = await this.boardRepository.delete(id);
    // console.log('result : ', result);

    //remove 사용
    const board = await this.getBoardById(id);
    console.log('--------------------------------------');
    const result = await this.boardRepository.remove(board);
    console.log('result : ', result);
  }
  // // 업데이트
  // updateBoard(id: string, status: BoardStatus): Board {
  //   // const boardUpdate = this.getBoardById(id); // 업데이트 하고자 하는 정보를 board에 넣어 준다;
  //   const boardUpdate = this.getBoardById(id);
  //   boardUpdate.status = BoardStatus.PRIVATE;
  //   return boardUpdate;
  // }
}
