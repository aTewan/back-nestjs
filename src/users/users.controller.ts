import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, UserGender } from './user.model'
import { CreateUserDto } from './dto/create-user-dto';

@Controller('users')
export class UsersController {
  constructor(private usersServices: UsersService) {}

  @Get()
  getAllUsers(): User[] {
    return this.usersServices.getAllUsers();
  }

  @Get('/:id')
  getUserById(@Param('id') id: string): User {
    return this.usersServices.getUserById(id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): User {
    return this.usersServices.createUser(createUserDto);
  }
}
