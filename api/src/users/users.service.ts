import { Injectable, Get, Post, Body, NotFoundException } from '@nestjs/common';
import { User, UserGender } from './user.model'

import { v1 as uuidv1 } from 'uuid'
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UsersService {
  private users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: string): User {
    const userFound = this.users.find(user => user.id === id);

    if (!userFound) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return userFound;
  }

  deleteUserById(id: string): void {
    const userFound = this.getUserById(id)
    this.users = this.users.filter(user => user.id !== userFound.id);
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