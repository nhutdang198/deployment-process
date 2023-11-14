import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service'; // Import CartService
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import validator from 'validator';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  cart: Product[] = [];
  total: number = 0;

  name: string = '';
  email: string = '';
  address: string = '';

  nameError: boolean = true;
  emailError: boolean = true;
  addressError: boolean = true;

  constructor(
    private cartService: CartService,
    private router: Router,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCartContents(); // Get cart contents
    this.total = this.cartService.getTotalPrice(); // Get total price
  }

  removeFromCart(product: Product): void {
    this.notification.create('success', '', 'Product is removed from cart');
    this.cartService.removeFromCart(product); // Remove a product from the cart
    this.cart = this.cartService.getCartContents(); // Update cart contents
    this.total = this.cartService.getTotalPrice(); // Update total price
  }

  completeCheckout(): void {
    if (
      this.nameError &&
      this.emailError &&
      this.addressError &&
      this.cartService.getTotalItem() > 0
    ) {
      this.cartService.clearCart();
      this.router.navigate(['/success-order']);
    } else {
      this.notification.create('error', '', 'Something went wrong');
    }
  }

  nameChanged(event: any) {
    this.nameError = validator.isLength(event, { min: 4, max: 12 });
  }

  emailChanged(event: any) {
    this.emailError = validator.isEmail(event);
  }

  addressChanged(event: any) {
    this.addressError = validator.isLength(event, { min: 4, max: 12 });
  }
}
