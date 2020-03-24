import { UserGender } from '../user.model'
import { IsNotEmpty, IsEmail } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({ example: "John", description: "Prénom de l'utilisateur"})
  @IsNotEmpty()
  firstname: string;
  
  @ApiProperty({ example: "Doe", description: "Nom de famille de l'utilisateur"})
  @IsNotEmpty()
  lastname: string;
  
  @ApiProperty({ example: "john.doe@test.com", description: "E-mail de l'utilisateur"})
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: "MALE", description: "Genre de l'utilisateur", enum: UserGender})
  @IsNotEmpty()
  gender: UserGender;
}