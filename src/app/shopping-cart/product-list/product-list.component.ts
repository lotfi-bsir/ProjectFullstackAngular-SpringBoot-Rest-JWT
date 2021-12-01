import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []
  wishlist: number[] = []

  constructor() { 
    this.productList = [
      new Product(
        1,
        'Black Running Shoes',
        'Black Running Shoes',
        109.99),
      new Product(
        2,
        'Black Running Shoes',
        'Black Running Shoes',
        109.99),
      new Product(
        3,
        'Black Running Shoes',
        'Black Running Shoes',
        109.99)
    ];
  }

  ngOnInit() { }

}
