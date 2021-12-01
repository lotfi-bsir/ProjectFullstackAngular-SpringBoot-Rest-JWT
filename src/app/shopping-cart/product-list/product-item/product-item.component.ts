import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product = new Product(5, 'NA');

  @Input() addedToWishlist: boolean = true;

  constructor(

  ) { }

  ngOnInit() {
  }

  handleAddToCart() {
    console.log('added to cart');
  }

  handleAddToWishlist() {
    this.addedToWishlist = true;
  }

  handleRemoveFromWishlist() {
    this.addedToWishlist = false;
  }

}
