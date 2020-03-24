export class User {
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