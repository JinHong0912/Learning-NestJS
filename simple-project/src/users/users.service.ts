import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [];

  getAllUsers(): any {
    return this.users;
  }
}
