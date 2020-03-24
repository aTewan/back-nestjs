import { UserGender } from '../user.model'

export class CreateUserDto {
  firstname: string; 
  lastname: string; 
  email: string;
  gender: UserGender;
}