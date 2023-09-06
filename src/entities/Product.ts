import { v4 as uuid } from "uuid";

export class Product {
  public id: string;

  constructor(
    public name: string,
    public description: string,
    public quantity: number,
    public price: number
  ) {
    this.id = uuid();
  }
}
