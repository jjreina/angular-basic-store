import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './components/category/category.component';
import { MainPageComponent } from './pages/main-page.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [MainPageComponent, CategoryComponent],
  imports: [CommonModule],
  exports: [MainPageComponent],
  providers: [provideHttpClient()],
})
export class CategoriesModule {}
