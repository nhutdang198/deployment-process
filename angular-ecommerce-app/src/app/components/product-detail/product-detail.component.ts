import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    // Get the product ID from the route parameter
    const productId = this.route.snapshot.paramMap.get('id');

    if (productId) {
      // Fetch the product details using the ProductService
      this.productService
        .getProductById(+productId)
        .subscribe((data: Product) => {
          this.product = data;
        });
    }
  }

  addToCart(product: Product): void {
    this.notification.create('success', '', 'Product is added to cart');
    this.cartService.addToCart(product); // Add the selected product to the cart
  }
}
