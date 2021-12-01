import { Product } from "./product";

export class CartItem {
    id: number;
    qty: number;
    product: Product;
  
    constructor(id: number, product: Product, qty = 1) {
      this.id = id;
      this.product = product;
      this.qty = qty;
    }
  }