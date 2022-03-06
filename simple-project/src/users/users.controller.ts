import { Controller, Get } from '@nestjs/common';
import { UsersService } from "./users.service";

@Controller('/users')
export class UsersController {
  constructor(private usersService: UsersService) {
    this.usersService = usersService;
  }

  @Get()
  getUserTest(): any[] {
    return this.usersService.getAllUsers();
  }
}
