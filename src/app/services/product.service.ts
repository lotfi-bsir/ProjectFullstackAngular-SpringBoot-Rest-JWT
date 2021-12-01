import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  static counter: number = 0;

  products: Product[] = [
    new Product(ProductService.counter++, 'Black shoes', 'desc', 100),
    new Product(ProductService.counter++, 'Black shoes', 'desc', 150),
    new Product(ProductService.counter++, 'Black shoes', 'desc', 200),
    new Product(ProductService.counter++, 'Black shoes', 'desc', 150),
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
