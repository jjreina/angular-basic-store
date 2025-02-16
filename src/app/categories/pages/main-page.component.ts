import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../interfaces/category.interface';

@Component({
  selector: 'categories-main-page-component',
  templateUrl: 'main-page.component.html',
  standalone: false,
})
export class MainPageComponent implements OnInit {
  public categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories.categories;
    });
  }

  public onCategorySelected(categorySelected: string): void {
    this.categoriesService.setCategorySelected(categorySelected);
  }
}
