import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../categories/services/categories.service';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/products.inteface';

@Component({
  selector: 'products-main-page-component',
  templateUrl: 'main-page.component.html',
  standalone: false,
})
export class MainPageComponent implements OnInit {
  public categorySelected: string = '';
  public products: Product[] = [];

  constructor(
    private categoriesService: CategoriesService,
    private productsStervice: ProductsService,
  ) {}

  ngOnInit() {
    this.categoriesService.categorySelected.subscribe((categorySelected) => {
      this.productsStervice
        .getProducts(categorySelected)
        .subscribe((products) => {
          this.products = products.results;
        });
    });
  }
}
