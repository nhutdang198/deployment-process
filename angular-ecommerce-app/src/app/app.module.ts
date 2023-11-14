import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SuccessOrderComponent } from './components/success-order/success-order.component';
import { NgIconsModule, provideNgIconsConfig } from '@ng-icons/core';
import {
  heroShoppingCart,
  heroCube,
  heroCheckBadge,
} from '@ng-icons/heroicons/outline';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductItemComponent } from './components/product-item/product-item.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ShoppingCartComponent,
    ProductDetailComponent,
    ProductItemComponent,
    SuccessOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({ heroShoppingCart, heroCube, heroCheckBadge }),
    DemoNgZorroAntdModule,
    BrowserAnimationsModule,
  ],
  providers: [
    provideNgIconsConfig({
      size: '2.5em',
      color: 'red',
    }),
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
