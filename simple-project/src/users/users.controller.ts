import { Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.model';

@Controller('/users')
export class UsersController {
  constructor(private usersService: UsersService) {
    this.usersService = usersService;
  }

  @Get('')
  getUserTest(): any[] {
    return this.usersService.getAllUsers();
  }

  // @Get(':id')
  // getUserById(@Param('id') id: string): User {
  //   console.log(id);
  //   return this.UsersService.getUserById(id);
  // }
}
