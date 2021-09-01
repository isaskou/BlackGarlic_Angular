export class LogInfo {
    id: number;
    username: string;
    role: string;
    jwt: number;


  constructor(
    id: number, 
    username: string, 
    role: string, 
    jwt: number
) {
    this.id = id
    this.username = username
    this.role = role
    this.jwt = jwt
  }

}
