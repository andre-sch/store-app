import { v4 as uuid } from "uuid";

export class Purchase {
  public id: string;

  constructor(
    public userId: string,
    public productId: string,
    public shippingAddress: string,
    public payment: string,
    public quantity: number
  ) {
    this.id = uuid();
  }
}
