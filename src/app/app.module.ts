import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ProductsModule, CategoriesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
