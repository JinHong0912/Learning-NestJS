import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { BoardDto } from './board.dto';
import { BoardUpdateDto } from './board.updateDto';

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
    const board = this.boards.find((board) => board.id === id);

    //예외 처리
    if (!board) {
      throw new NotFoundException('존제하지 않는 게시물 입니다');
    }
    return board;
  }

  deleteBoard(id: string): void {
    const found = this.getBoardById(id);
    this.boards = this.boards.filter((board) => found.id !== id);
  }
  // 업데이트
  updateBoard(id: string, status: BoardStatus): Board {
    // const boardUpdate = this.getBoardById(id); // 업데이트 하고자 하는 정보를 board에 넣어 준다;
    const boardUpdate = this.getBoardById(id);
    boardUpdate.status = BoardStatus.PRIVATE;
    return boardUpdate;
  }
}
