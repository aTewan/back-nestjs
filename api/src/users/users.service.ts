import { Injectable, Get, Post, Body, NotFoundException, Inject } from '@nestjs/common';
import { User, UserGender } from './user.model'

import { v1 as uuidv1 } from 'uuid'
import { CreateUserDto } from './dto/create-user-dto';
import { Model, Types } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_MODEL') private userModel: Model<User>){}

  async getAllUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
  
  async getUserById(id: string): Promise<User> {
    const userFound = await this.userModel.findById(id);

    if(!userFound) {
      throw new NotFoundException();
    }

    return userFound;
  }

  async deleteUserById(id: string): Promise<User> {
    await this.getUserById(id)
    const userDeleted = await this.userModel.findByIdAndRemove(id)
    return userDeleted;
  }
  
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const userCreated = new this.userModel(createUserDto)
    return await userCreated.save();
  }
}
