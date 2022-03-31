import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { BoardDto } from './board.dto';

@Injectable()
export class BoardService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  // getBoardById(id: string): Board {
  //   return this.boards.find((board) => board.id === id);
  // }

  //게시글 등록 생성
  createBoard(boardDto: BoardDto): Board {
    const { title, description } = boardDto;
    const board: Board = {
      id: uuid(), // 해당 라인을 주석처리하면 예외 발생
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    return this.boards.find((board) => board.id === id);
  }

  deleteBoard(id: string): void {
    this.boards = this.boards.filter((board) => board.id !== id);
  }
  // 업데이트
  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id); // 업데이트 하고자 하는 정보를 board에 넣어 준다
    board.status = status;
    return board;
  }
}
