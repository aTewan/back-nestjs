export interface User {
  id: string,
  nickname: string,
  gender: UserGender
}

export enum UserGender {
  FEMALE = "FEMALE",
  MALE = "MALE"
}