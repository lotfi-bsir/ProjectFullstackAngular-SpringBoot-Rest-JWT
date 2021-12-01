import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product = new Product(5, 'NA');

  @Input() addedToWishlist: boolean = true;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit() {
  }

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem);
  }

  handleAddToWishlist() {
    this.addedToWishlist = true;
  }

  handleRemoveFromWishlist() {
    this.addedToWishlist = false;
  }

}
