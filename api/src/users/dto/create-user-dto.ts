import { UserGender } from '../user.model'
import { IsNotEmpty, IsEmail } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({ description: "Prénom de l'utilisateur"})
  @IsNotEmpty()
  firstname: string;
  
  @ApiProperty({ description: "Nom de famille de l'utilisateur"})
  @IsNotEmpty()
  lastname: string;
  
  @ApiProperty({ description: "E-mail de l'utilisateur"})
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: "Genre de l'utilisateur", enum: UserGender})
  @IsNotEmpty()
  gender: UserGender;
}