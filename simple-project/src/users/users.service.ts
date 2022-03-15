import { Injectable } from '@nestjs/common';
import { User, UsersStatus } from './users.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class UsersService {
  private users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
  }

  createUsers(name: string, number: string): User {
    const users: User = {
      id: uuid, //해당 부분에서 순서를 자동으로 부여 및 import 수동으로 등록
      name: name,
      number: number,
      status: UsersStatus.PUBLIC,
    };
    this.users.push(users);
    return users;
  }
}
