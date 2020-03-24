import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model'

@Controller('users')
export class UsersController {
  constructor(private usersServices: UsersService) {}

  @Get()
  getAllUsers(): User[] {
    return this.usersServices.getAllUsers();
  }
}
