import { Document } from 'mongoose'

export interface User extends Document {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  gender: UserGender;
}

export enum UserGender {
  FEMALE = "FEMALE",
  MALE = "MALE"
}