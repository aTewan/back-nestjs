import { Controller, Get, Post, Body, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, UserGender } from './user.model'
import { CreateUserDto } from './dto/create-user-dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersServices: UsersService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.usersServices.getAllUsers();
  }
  
  @Get('/:id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return await this.usersServices.getUserById(id);
  }

  @Delete('/:id')
  async deleteUserById(@Param('id') id: string): Promise<User> {
    return await this.usersServices.deleteUserById(id);
  }
  
  @Post()
  @UsePipes(ValidationPipe)
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.usersServices.createUser(createUserDto);
  }
}
