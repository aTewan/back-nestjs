import { Controller, Get, Post, Body, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, UserGender } from './user.model'
import { CreateUserDto } from './dto/create-user-dto';
import { ApiTags, ApiCreatedResponse, ApiNotFoundResponse, ApiAcceptedResponse, ApiOkResponse } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersServices: UsersService) {}

  @Get()
  @ApiOkResponse({description: "Appel à la base de donnée réussie", type: [User]})
  async getAllUsers(): Promise<User[]> {
    return await this.usersServices.getAllUsers();
  }
  
  @Get('/:id')
  @ApiOkResponse({description: "Un utilisateur a été trouvé", type: User})
  @ApiNotFoundResponse({description: "Aucun utilisateur trouvé"})
  async getUserById(@Param('id') id: string): Promise<User> {
    return await this.usersServices.getUserById(id);
  }

  @Delete('/:id')
  @ApiOkResponse({description: "Un utilisateur a été supprimé", type: User})
  @ApiNotFoundResponse({description: "Aucun utilisateur trouvé"})
  async deleteUserById(@Param('id') id: string): Promise<User> {
    return await this.usersServices.deleteUserById(id);
  }
  
  @Post()
  @UsePipes(ValidationPipe)
  @ApiCreatedResponse({description: "L'utilisateur a bien été enregistré", type: User})
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.usersServices.createUser(createUserDto);
  }
}
