import { Injectable } from '@nestjs/common';
import { Board00Model, Board00Status } from './board00.model';
import { v1 as uuid } from 'uuid';
import { CreateBoard00Dto } from './dto/create-board.dto';

@Injectable()
export class Board00Service {
  private board00: Board00Model[] = []; // 게시판의 정보를 답는 곳 private 다른 컨퍼넌트에서 boards 를 수정 가능 해서 private 로 선언
  // boards00 배열 안에 게시물 데이터들을 저장 하겠다.
  //  Private을 쓴 이유는 만약 private을 사용하지 않는 다면 다른 컴포넌트에서 이 Board00Service에 접근해서 이 boards00 배열 값을 수정할 수 있기 때문

  // 모든 게시물을 가지고 오는 부분 만들기
  getAllBoard00(): Board00Model[] {
    // : 리턴 값() => 리턴 값이 어떤 타입이 되는지
    return this.board00; //getAllBoard00을 호출 하면 boards00 안에 있는 모든 값을 받을 수 있음.
  }

  // 게시물 생성 createBoard00 매서드 만들기
  createBoard00(createBoard00Dto: CreateBoard00Dto) {
    // 인수를 넣어 준다.
    const { title, description } = createBoard00Dto;
    const board: Board00Model = {
      //들어 오는 내용을 정의 해준다.
      //유니크한 아이디 생성 id: uuid
      id: uuid(),
      title,
      description,
      status: Board00Status.PUBLIC, // 디폴드
    };
    //게시판 생성된 정보를 Boards00 에 넣어 준다.
    this.board00.push(board); //push매서드 사용해서 제목과 글을 이용해서 새로운 계시글은 넣어 준다.
    return board;
  }

  // 게시글 한개만 보기
  getBoard00ById(id: string): Board00Model {
    return this.board00.find((board) => board.id === id);
  }

  //게시글 삭제 하기
  deleteBoard00(id: string): void {
    console.log(id);
    this.board00 = this.board00.filter((board) => board.id !== id); // 삭제를 하고 결과를 다시 board00에 널어 줘야 한다.
  }
  // 게시글 업그레이드 하기
  updateBoard00Status(id: string, status: Board00Status): Board00Model {
    const board = this.getBoard00ById(id);
    board.status = Board00Status.PRIVATE;
    return board;
  }
}
