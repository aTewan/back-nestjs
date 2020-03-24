import { UserGender } from '../user.model'
import { IsNotEmpty, IsEmail } from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty()
  firstname: string;
  
  @IsNotEmpty()
  lastname: string;
  
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  gender: UserGender;
}