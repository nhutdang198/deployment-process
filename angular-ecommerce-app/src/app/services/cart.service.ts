import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[] = [];

  addToCart(product: Product): void {
    this.cart.push(product);
  }

  removeFromCart(product: Product): void {
    const index = this.cart.indexOf(product);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  getCartContents(): Product[] {
    return this.cart;
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }

  getTotalItem(): number {
    return this.cart.length;
  }

  clearCart(): void {
    while (this.cart.length) {
      this.cart.pop();
    }
  }

  getCart() {
    return this.cart;
  }
}
