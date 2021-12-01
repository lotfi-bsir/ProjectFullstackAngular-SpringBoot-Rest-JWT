import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];

  cartTotal = 0

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.loadCartItems();
    this.calcCartTotal();
  }


  loadCartItems() {
    this.cartItems = this.cartService.getCartItems();
  }

  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty  * item.product.price)
    })
  }

}
