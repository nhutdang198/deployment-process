import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  total: any;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.total = this.cartService.getCartContents();
  }

  title = 'angular-app';
}
