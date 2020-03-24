import { Injectable, Get, Post, Body } from '@nestjs/common';
import { User, UserGender } from './user.model'

import { v1 as uuidv1 } from 'uuid'
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UsersService {
  private users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
  }

  createUser(createUserDto: CreateUserDto): User {
    const { firstname, lastname, email, gender } = createUserDto;
    const user: User = {
      id: uuidv1(),
      firstname: firstname,
      lastname: lastname,
      email: email,
      gender: gender
    };
    this.users.push(user);
    return user;
  }
}
