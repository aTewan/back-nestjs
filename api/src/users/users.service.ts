import { Injectable, Get, Post, Body, NotFoundException, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserGender } from './user.model'
import { CreateUserDto } from './dto/create-user-dto';
import { Model, Types } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>){}

  async getAllUsers() {
    const users = await this.userModel.find().exec();

    return users.map(u => ({
      id: u._id,
      firstname: u.firstname,
      lastname: u.lastname,
      email: u.email,
      gender: u.gender
    }));
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
