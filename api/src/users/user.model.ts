import { Document, Schema } from 'mongoose'
import { ApiProperty } from '@nestjs/swagger';

export enum UserGender {
  FEMALE = "FEMALE",
  MALE = "MALE"
}

export const UserSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true }
});

export interface User {
    @ApiProperty({ example: "5e7b6a3805f61e0058449d37", description: "Identifiant en BDD de l'utilisateur" })
    public id: string;

    @ApiProperty({ example: "John", description: "Prénom de l'utilisateur"})
    public firstname: string;

    @ApiProperty({ example: "Doe", description: "Nom de famille de l'utilisateur"})
    public lastname: string;

    @ApiProperty({ example: "john.doe@test.com", description: "E-mail de l'utilisateur"})
    public email: string;

    @ApiProperty({ example: "MALE", description: "Genre de l'utilisateur", enum: UserGender})
    public gender: UserGender;
}

