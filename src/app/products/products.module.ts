import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProductComponent } from './components/product/product.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [MainPageComponent, ListProductsComponent, ProductComponent],
  imports: [CommonModule],
  exports: [MainPageComponent],
  providers: [provideHttpClient()],
})
export class ProductsModule {}
