import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartItem[];

  static counter : number = 0;

  constructor() {

    this.cart = [
      new CartItem(CartService.counter++, new Product(CartService.counter++, 'Black shoes', '', 150)),
      new CartItem(CartService.counter++, new Product(CartService.counter++, 'Black shoes', '', 120)),
      new CartItem(CartService.counter++, new Product(CartService.counter++, 'Black shoes', '', 220))
    ]

   }

  getCartItems(): CartItem[] {
    
    let cartItems: CartItem[] = []
    for (let item of this.cart) {
      let productExists = false;
      for(let i of cartItems) {
        if(i.product.id === item.product.id) {
          i.qty++;
          productExists = true
          break;
        }
      }

      if (!productExists) {
        cartItems.push(new CartItem(item.id, item.product));
      }
    }

    return cartItems;

  }

  addProductToCart(product: Product): Observable<any> {
    return of(this.cart.push(new CartItem(CartService.counter++, product)));
  }
}
