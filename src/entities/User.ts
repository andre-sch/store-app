import { v4 as uuid } from "uuid";

export class User {
  public id: string;

  constructor(
    public name: string,
    public surname: string,
    public email: string,
    public password: string
  ) {
    this.id = uuid();
  }
}
