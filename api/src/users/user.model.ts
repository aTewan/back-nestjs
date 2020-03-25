import { Document } from 'mongoose'
import { ApiProperty } from '@nestjs/swagger';

export enum UserGender {
  FEMALE = "FEMALE",
  MALE = "MALE"
}

export class User extends Document {
  @ApiProperty({ example: "5e7b6a3805f61e0058449d37", description: "Identifiant en BDD de l'utilisateur" })
  _id: string;

  @ApiProperty({ example: "John", description: "Prénom de l'utilisateur"})
  firstname: string;

  @ApiProperty({ example: "Doe", description: "Nom de famille de l'utilisateur"})
  lastname: string;

  @ApiProperty({ example: "john.doe@test.com", description: "E-mail de l'utilisateur"})
  email: string;

  @ApiProperty({ example: "MALE", description: "Genre de l'utilisateur", enum: UserGender})
  gender: UserGender;
}

